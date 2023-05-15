import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { authHelpers } from 'src/helpers/auth.helpers';
import { loginDto } from './dto/login.dto';
import { createUserDto } from './dto/createUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OtpEntity } from './entities/otp.entity';
import { Repository } from 'typeorm';
import { EmailService } from 'src/email/email.service';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(OtpEntity) private otpRepository: Repository<OtpEntity>,
    private usersService: UsersService,
    private jwtService: JwtService,
    private emailService: EmailService,
    private adminService: AdminService,
  ) {}

  async login(data: loginDto) {
    const user = await this.usersService.findUserByEmail(data.email);
    if (
      !user ||
      !(await authHelpers.verifyPassword(data.password, user.password))
    )
      throw new HttpException(
        'invalid email or password',
        HttpStatus.BAD_REQUEST,
      );

    if (!user.verified)
      throw new HttpException('email not verified', HttpStatus.BAD_REQUEST);

    const payload = { email: user.email, id: user.id, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: authHelpers.serializeUser(user),
    };
  }

  async adminLogin(data: loginDto) {
    const admin = {
      username: '',
      password: '',
      id: '',
      role: '',
    };

    // const admin = await this.adminService.findAdminByEmail(data.email);
    if (
      !admin ||
      !(await authHelpers.verifyPassword(data.password, admin.password))
    )
      throw new HttpException(
        'invalid email or password',
        HttpStatus.BAD_REQUEST,
      );

    const payload = {
      username: admin.username,
      id: admin.id,
      role: admin.role,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
      admin: authHelpers.serializeAdmin(admin),
    };
  }

  async signup(data: createUserDto): Promise<boolean> {
    const createAccount = await this.usersService.createUser(data);
    if (createAccount) {
      await this.sendOtp(data.email);
      // await this.emailService.sendWelcomeEmail(data.email, data.full_name);
    }
    return true;
  }

  // rember to update the email stuff

  async resendOtp(email: string) {
    const user = await this.usersService.findUserByEmail(email);
    if (!user)
      throw new HttpException('invalid email address', HttpStatus.BAD_REQUEST);
    await this.sendOtp(email);
    return true;
  }

  async verifyEmail(email: string, otp: number) {
    const userExists = await this.usersService.findUserByEmail(email);
    if (!userExists)
      throw new HttpException('invalid email address', HttpStatus.BAD_REQUEST);
    await this.verifyOtp(email, otp);
    const user = await this.usersService.updateUser({
      ...userExists,
      verified: true,
    });

    const payload = { email: user.email, id: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: user,
    };
  }

  async verifyOtp(email: string, otp: number) {
    const userExists = await this.usersService.findUserByEmail(email);
    if (!userExists)
      throw new HttpException('invalid email address', HttpStatus.BAD_REQUEST);

    const storedOtp = await this.otpRepository.findOne({
      where: { email, otp },
    });
    if (!storedOtp)
      throw new HttpException('invalid otp', HttpStatus.BAD_REQUEST);
    if (parseInt(storedOtp.expiration) < new Date().getTime())
      throw new HttpException('otp expired', HttpStatus.FORBIDDEN);
    await this.otpRepository.update(
      { id: storedOtp.id },
      { expiration: new Date().getTime().toString() },
    );
    return true;
  }

  async sendOtp(email: string, newUser?: boolean) {
    const user = await this.usersService.findUserByEmail(email);
    if (!user)
      throw new HttpException('invalid email address', HttpStatus.BAD_REQUEST);

    const otp = authHelpers.generateOtp();
    const futureDate = new Date();
    futureDate.setMinutes(futureDate.getMinutes() + 5);

    const expiration = futureDate.getTime().toString();
    await this.otpRepository.upsert({ otp, expiration, email }, ['email']);

    //send email
    if (newUser) {
      return await this.emailService.sendVerifyMail(email, otp);
    }
    await this.emailService.sendOtpEmail(otp, email);
  }

  async requestPasswordRest(email: string) {
    const user = await this.usersService.findUserByEmail(email);
    if (!user)
      throw new HttpException('invalid email address', HttpStatus.BAD_REQUEST);
    await this.sendOtp(email);
    return true;
  }

  async resetPassword(email: string, newPassword: string, otp: number) {
    const user = await this.usersService.findUserByEmail(email);
    if (!user)
      throw new HttpException('invalid email address', HttpStatus.BAD_REQUEST);

    await this.verifyOtp(email, otp);

    const password = await authHelpers.hashPassword(newPassword);

    if (await authHelpers.verifyPassword(newPassword, user.password))
      throw new HttpException(
        'you cannot set your old password as your new password kindly use a different password',
        HttpStatus.FORBIDDEN,
      );

    await this.usersService.updateUser({
      ...user,
      password,
    });
    return true;
  }
}

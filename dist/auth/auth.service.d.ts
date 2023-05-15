import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { loginDto } from './dto/login.dto';
import { createUserDto } from './dto/createUser.dto';
import { OtpEntity } from './entities/otp.entity';
import { Repository } from 'typeorm';
import { EmailService } from 'src/email/email.service';
import { AdminService } from 'src/admin/admin.service';
export declare class AuthService {
    private otpRepository;
    private usersService;
    private jwtService;
    private emailService;
    private adminService;
    constructor(otpRepository: Repository<OtpEntity>, usersService: UsersService, jwtService: JwtService, emailService: EmailService, adminService: AdminService);
    login(data: loginDto): Promise<{
        access_token: string;
        user: import("../@types/app.types").ISerializedUser;
    }>;
    adminLogin(data: loginDto): Promise<{
        access_token: string;
        admin: import("../@types/app.types").ISerializedAdmin;
    }>;
    signup(data: createUserDto): Promise<boolean>;
    resendOtp(email: string): Promise<boolean>;
    verifyEmail(email: string, otp: number): Promise<{
        access_token: string;
        user: import("../@types/app.types").ISerializedUser;
    }>;
    verifyOtp(email: string, otp: number): Promise<boolean>;
    sendOtp(email: string, newUser?: boolean): Promise<boolean>;
    requestPasswordRest(email: string): Promise<boolean>;
    resetPassword(email: string, newPassword: string, otp: number): Promise<boolean>;
}

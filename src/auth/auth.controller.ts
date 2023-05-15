import { Controller, Post, Body, HttpStatus } from '@nestjs/common';

import { AuthService } from './auth.service';
import { createUserDto } from './dto/createUser.dto';
import { loginDto } from './dto/login.dto';
import { resendOtpDto, verifyEmailDto } from './dto/verification.dto';
import { _handleError } from 'src/helpers/error.helpers';
import { passwordResetDto } from './dto/passwordRest.dto';
import { Public } from 'src/constants/auth.public';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // remeber otp implementation => change it to be in use table
  @Post('/login')
  async login(@Body() body: loginDto) {
    try {
      const data = await this.authService.login(body);
      return { data, status: HttpStatus.OK, message: 'login successful' };
    } catch (error) {
      _handleError(error);
    }
  }

  @Post('/sign-up')
  async signup(@Body() body: createUserDto) {
    try {
      await this.authService.signup(body);
      return {
        status: HttpStatus.OK,
        message:
          'your account has been created and an otp has been sent your email kindly verify your email',
      };
    } catch (error) {
      _handleError(error);
    }
  }

  @Post('/verify-email')
  async verifyEmail(@Body() body: verifyEmailDto) {
    try {
      const data = await this.authService.verifyEmail(body.email, body.otp);
      return {
        data,
        status: HttpStatus.OK,
        message: 'verification successful',
      };
    } catch (error) {
      _handleError(error);
    }
  }

  @Post('/resend-otp')
  async resendOtp(@Body() body: resendOtpDto) {
    try {
      const data = await this.authService.resendOtp(body.email);
      return {
        data,
        status: HttpStatus.OK,
        message: 'an otp has been sent to your email',
      };
    } catch (error) {
      _handleError(error);
    }
  }

  @Post('/request-password-reset')
  async requestPasswordReset(@Body() body: resendOtpDto) {
    try {
      const data = await this.authService.requestPasswordRest(body.email);
      return {
        data,
        status: HttpStatus.OK,
        message: 'an otp has been sent to your email',
      };
    } catch (error) {
      _handleError(error);
    }
  }

  @Post('/password-reset')
  async resetPassword(@Body() body: passwordResetDto) {
    try {
      const data = await this.authService.resetPassword(
        body.email,
        body.password,
        body.otp,
      );
      return {
        data,
        status: HttpStatus.OK,
        message:
          'your password rest successful kindly login with your new password ',
      };
    } catch (error) {
      _handleError(error);
    }
  }

  @Post('/admin-login')
  async adminLogin(@Body() body: loginDto) {
    try {
      const data = await this.authService.adminLogin(body);
      return { data, status: HttpStatus.OK, message: 'login successful' };
    } catch (error) {
      _handleError(error);
    }
  }
}

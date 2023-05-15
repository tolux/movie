import { HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createUserDto } from './dto/createUser.dto';
import { loginDto } from './dto/login.dto';
import { resendOtpDto, verifyEmailDto } from './dto/verification.dto';
import { passwordResetDto } from './dto/passwordRest.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: loginDto): Promise<{
        data: {
            access_token: string;
            user: import("../@types/app.types").ISerializedUser;
        };
        status: HttpStatus;
        message: string;
    }>;
    signup(body: createUserDto): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    verifyEmail(body: verifyEmailDto): Promise<{
        data: {
            access_token: string;
            user: import("../@types/app.types").ISerializedUser;
        };
        status: HttpStatus;
        message: string;
    }>;
    resendOtp(body: resendOtpDto): Promise<{
        data: boolean;
        status: HttpStatus;
        message: string;
    }>;
    requestPasswordReset(body: resendOtpDto): Promise<{
        data: boolean;
        status: HttpStatus;
        message: string;
    }>;
    resetPassword(body: passwordResetDto): Promise<{
        data: boolean;
        status: HttpStatus;
        message: string;
    }>;
    adminLogin(body: loginDto): Promise<{
        data: {
            access_token: string;
            admin: import("../@types/app.types").ISerializedAdmin;
        };
        status: HttpStatus;
        message: string;
    }>;
}

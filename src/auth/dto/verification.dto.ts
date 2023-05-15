import { IsEmail, IsNumber } from 'class-validator';

export class pesendOtpDto {
  @IsEmail()
  email: string;
}
export class resendOtpDto {
  @IsEmail()
  email: string;
}

export class verifyEmailDto {
  @IsEmail()
  email: string;

  @IsNumber()
  otp: number;
}

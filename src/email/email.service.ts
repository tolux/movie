import { Injectable } from '@nestjs/common';
import { sendMail } from 'src/helpers/mail.helpers';

import { generateWelcomeMail } from './templates/welcome';
import { generateOtpMail } from './templates/otp-request';
import { generateVerifyEmail } from './templates/verify-email';
import { generateResetPasswordMail } from './templates/reset-password';

@Injectable()
export class EmailService {
  async sendOtpEmail(otp: number, email: string): Promise<boolean> {
    await sendMail({
      to: email,
      subject: 'Here is Your Otp',
      html: generateOtpMail(otp),
    });
    return true;
  }

  async sendWelcomeEmail(email: string, first_name: string): Promise<boolean> {
    await sendMail({
      to: email,
      subject: 'Welcome to Smatta Global',
      html: generateWelcomeMail(first_name),
    });

    return true;
  }

  async sendVerifyMail(email: string, otp: number): Promise<boolean> {
    await sendMail({
      to: email,
      subject: 'Verify Your Email Address ',
      html: generateVerifyEmail(otp),
    });
    return true;
  }

  async sendResetPasswordMail(email: string, otp: number): Promise<boolean> {
    await sendMail({
      to: email,
      subject: 'Reset Your Password',
      html: generateResetPasswordMail(otp),
    });
    return true;
  }
}

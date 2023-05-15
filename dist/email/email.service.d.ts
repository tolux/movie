export declare class EmailService {
    sendOtpEmail(otp: number, email: string): Promise<boolean>;
    sendWelcomeEmail(email: string, first_name: string): Promise<boolean>;
    sendVerifyMail(email: string, otp: number): Promise<boolean>;
    sendResetPasswordMail(email: string, otp: number): Promise<boolean>;
}

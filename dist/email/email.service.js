"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const mail_helpers_1 = require("../helpers/mail.helpers");
const welcome_1 = require("./templates/welcome");
const otp_request_1 = require("./templates/otp-request");
const verify_email_1 = require("./templates/verify-email");
const reset_password_1 = require("./templates/reset-password");
let EmailService = class EmailService {
    async sendOtpEmail(otp, email) {
        await (0, mail_helpers_1.sendMail)({
            to: email,
            subject: 'Here is Your Otp',
            html: (0, otp_request_1.generateOtpMail)(otp),
        });
        return true;
    }
    async sendWelcomeEmail(email, first_name) {
        await (0, mail_helpers_1.sendMail)({
            to: email,
            subject: 'Welcome to Smatta Global',
            html: (0, welcome_1.generateWelcomeMail)(first_name),
        });
        return true;
    }
    async sendVerifyMail(email, otp) {
        await (0, mail_helpers_1.sendMail)({
            to: email,
            subject: 'Verify Your Email Address ',
            html: (0, verify_email_1.generateVerifyEmail)(otp),
        });
        return true;
    }
    async sendResetPasswordMail(email, otp) {
        await (0, mail_helpers_1.sendMail)({
            to: email,
            subject: 'Reset Your Password',
            html: (0, reset_password_1.generateResetPasswordMail)(otp),
        });
        return true;
    }
};
EmailService = __decorate([
    (0, common_1.Injectable)()
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map
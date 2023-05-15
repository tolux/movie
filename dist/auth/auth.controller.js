"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const createUser_dto_1 = require("./dto/createUser.dto");
const login_dto_1 = require("./dto/login.dto");
const verification_dto_1 = require("./dto/verification.dto");
const error_helpers_1 = require("../helpers/error.helpers");
const passwordRest_dto_1 = require("./dto/passwordRest.dto");
const auth_public_1 = require("../constants/auth.public");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(body) {
        try {
            const data = await this.authService.login(body);
            return { data, status: common_1.HttpStatus.OK, message: 'login successful' };
        }
        catch (error) {
            (0, error_helpers_1._handleError)(error);
        }
    }
    async signup(body) {
        try {
            await this.authService.signup(body);
            return {
                status: common_1.HttpStatus.OK,
                message: 'your account has been created and an otp has been sent your email kindly verify your email',
            };
        }
        catch (error) {
            (0, error_helpers_1._handleError)(error);
        }
    }
    async verifyEmail(body) {
        try {
            const data = await this.authService.verifyEmail(body.email, body.otp);
            return {
                data,
                status: common_1.HttpStatus.OK,
                message: 'verification successful',
            };
        }
        catch (error) {
            (0, error_helpers_1._handleError)(error);
        }
    }
    async resendOtp(body) {
        try {
            const data = await this.authService.resendOtp(body.email);
            return {
                data,
                status: common_1.HttpStatus.OK,
                message: 'an otp has been sent to your email',
            };
        }
        catch (error) {
            (0, error_helpers_1._handleError)(error);
        }
    }
    async requestPasswordReset(body) {
        try {
            const data = await this.authService.requestPasswordRest(body.email);
            return {
                data,
                status: common_1.HttpStatus.OK,
                message: 'an otp has been sent to your email',
            };
        }
        catch (error) {
            (0, error_helpers_1._handleError)(error);
        }
    }
    async resetPassword(body) {
        try {
            const data = await this.authService.resetPassword(body.email, body.password, body.otp);
            return {
                data,
                status: common_1.HttpStatus.OK,
                message: 'your password rest successful kindly login with your new password ',
            };
        }
        catch (error) {
            (0, error_helpers_1._handleError)(error);
        }
    }
    async adminLogin(body) {
        try {
            const data = await this.authService.adminLogin(body);
            return { data, status: common_1.HttpStatus.OK, message: 'login successful' };
        }
        catch (error) {
            (0, error_helpers_1._handleError)(error);
        }
    }
};
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.loginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/sign-up'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.createUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('/verify-email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verification_dto_1.verifyEmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Post)('/resend-otp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verification_dto_1.resendOtpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resendOtp", null);
__decorate([
    (0, common_1.Post)('/request-password-reset'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verification_dto_1.resendOtpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "requestPasswordReset", null);
__decorate([
    (0, common_1.Post)('/password-reset'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [passwordRest_dto_1.passwordResetDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Post)('/admin-login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.loginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "adminLogin", null);
AuthController = __decorate([
    (0, auth_public_1.Public)(),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map
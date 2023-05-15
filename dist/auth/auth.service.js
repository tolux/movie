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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const auth_helpers_1 = require("../helpers/auth.helpers");
const typeorm_1 = require("@nestjs/typeorm");
const otp_entity_1 = require("./entities/otp.entity");
const typeorm_2 = require("typeorm");
const email_service_1 = require("../email/email.service");
const admin_service_1 = require("../admin/admin.service");
let AuthService = class AuthService {
    constructor(otpRepository, usersService, jwtService, emailService, adminService) {
        this.otpRepository = otpRepository;
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.emailService = emailService;
        this.adminService = adminService;
    }
    async login(data) {
        const user = await this.usersService.findUserByEmail(data.email);
        if (!user ||
            !(await auth_helpers_1.authHelpers.verifyPassword(data.password, user.password)))
            throw new common_1.HttpException('invalid email or password', common_1.HttpStatus.BAD_REQUEST);
        if (!user.verified)
            throw new common_1.HttpException('email not verified', common_1.HttpStatus.BAD_REQUEST);
        const payload = { email: user.email, id: user.id, role: user.role };
        return {
            access_token: await this.jwtService.signAsync(payload),
            user: auth_helpers_1.authHelpers.serializeUser(user),
        };
    }
    async adminLogin(data) {
        const admin = {
            username: '',
            password: '',
            id: '',
            role: '',
        };
        if (!admin ||
            !(await auth_helpers_1.authHelpers.verifyPassword(data.password, admin.password)))
            throw new common_1.HttpException('invalid email or password', common_1.HttpStatus.BAD_REQUEST);
        const payload = {
            username: admin.username,
            id: admin.id,
            role: admin.role,
        };
        return {
            access_token: await this.jwtService.signAsync(payload),
            admin: auth_helpers_1.authHelpers.serializeAdmin(admin),
        };
    }
    async signup(data) {
        const createAccount = await this.usersService.createUser(data);
        if (createAccount) {
            await this.sendOtp(data.email);
        }
        return true;
    }
    async resendOtp(email) {
        const user = await this.usersService.findUserByEmail(email);
        if (!user)
            throw new common_1.HttpException('invalid email address', common_1.HttpStatus.BAD_REQUEST);
        await this.sendOtp(email);
        return true;
    }
    async verifyEmail(email, otp) {
        const userExists = await this.usersService.findUserByEmail(email);
        if (!userExists)
            throw new common_1.HttpException('invalid email address', common_1.HttpStatus.BAD_REQUEST);
        await this.verifyOtp(email, otp);
        const user = await this.usersService.updateUser(Object.assign(Object.assign({}, userExists), { verified: true }));
        const payload = { email: user.email, id: user.id };
        return {
            access_token: await this.jwtService.signAsync(payload),
            user: user,
        };
    }
    async verifyOtp(email, otp) {
        const userExists = await this.usersService.findUserByEmail(email);
        if (!userExists)
            throw new common_1.HttpException('invalid email address', common_1.HttpStatus.BAD_REQUEST);
        const storedOtp = await this.otpRepository.findOne({
            where: { email, otp },
        });
        if (!storedOtp)
            throw new common_1.HttpException('invalid otp', common_1.HttpStatus.BAD_REQUEST);
        if (parseInt(storedOtp.expiration) < new Date().getTime())
            throw new common_1.HttpException('otp expired', common_1.HttpStatus.FORBIDDEN);
        await this.otpRepository.update({ id: storedOtp.id }, { expiration: new Date().getTime().toString() });
        return true;
    }
    async sendOtp(email, newUser) {
        const user = await this.usersService.findUserByEmail(email);
        if (!user)
            throw new common_1.HttpException('invalid email address', common_1.HttpStatus.BAD_REQUEST);
        const otp = auth_helpers_1.authHelpers.generateOtp();
        const futureDate = new Date();
        futureDate.setMinutes(futureDate.getMinutes() + 5);
        const expiration = futureDate.getTime().toString();
        await this.otpRepository.upsert({ otp, expiration, email }, ['email']);
        if (newUser) {
            return await this.emailService.sendVerifyMail(email, otp);
        }
        await this.emailService.sendOtpEmail(otp, email);
    }
    async requestPasswordRest(email) {
        const user = await this.usersService.findUserByEmail(email);
        if (!user)
            throw new common_1.HttpException('invalid email address', common_1.HttpStatus.BAD_REQUEST);
        await this.sendOtp(email);
        return true;
    }
    async resetPassword(email, newPassword, otp) {
        const user = await this.usersService.findUserByEmail(email);
        if (!user)
            throw new common_1.HttpException('invalid email address', common_1.HttpStatus.BAD_REQUEST);
        await this.verifyOtp(email, otp);
        const password = await auth_helpers_1.authHelpers.hashPassword(newPassword);
        if (await auth_helpers_1.authHelpers.verifyPassword(newPassword, user.password))
            throw new common_1.HttpException('you cannot set your old password as your new password kindly use a different password', common_1.HttpStatus.FORBIDDEN);
        await this.usersService.updateUser(Object.assign(Object.assign({}, user), { password }));
        return true;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(otp_entity_1.OtpEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        jwt_1.JwtService,
        email_service_1.EmailService,
        admin_service_1.AdminService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
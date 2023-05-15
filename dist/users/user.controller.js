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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const error_helpers_1 = require("../helpers/error.helpers");
const updateUserPassword_dto_1 = require("./dto/updateUserPassword.dto");
const updateUserProfile_dto_1 = require("./dto/updateUserProfile.dto");
const create_movie_dto_1 = require("../movie/dto/create-movie.dto");
let UserController = class UserController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async updateUserPassword(body, req) {
        try {
            const id = req['user'];
            const data = await this.usersService.updateUserPassword(Object.assign(Object.assign({}, body), { id }));
            return { data, status: common_1.HttpStatus.OK, message: 'password updated' };
        }
        catch (error) {
            (0, error_helpers_1._handleError)(error);
        }
    }
    async createMoive(body, req) {
        try {
            const userId = req['user'];
            const data = await this.usersService.createMoive(body, userId);
            return { data, status: common_1.HttpStatus.OK, message: 'movie  created' };
        }
        catch (error) {
            (0, error_helpers_1._handleError)(error);
        }
    }
    async selectMoive(id, req) {
        try {
            const userId = req['user'];
            const data = await this.usersService.selectMoive(id, userId);
            return { data, status: common_1.HttpStatus.OK };
        }
        catch (error) {
            (0, error_helpers_1._handleError)(error);
        }
    }
    async listMoivesByRate(req) {
        try {
            const userId = req['user'];
            const data = await this.usersService.listMoivesByRate(userId);
            return { data, status: common_1.HttpStatus.OK };
        }
        catch (error) {
            (0, error_helpers_1._handleError)(error);
        }
    }
    async updateUserProfile(body, req) {
        try {
            const id = req['user'];
            const data = await this.usersService.updateUser(Object.assign(Object.assign({}, body), { id }));
            return { data, status: common_1.HttpStatus.OK, message: 'profile updated' };
        }
        catch (error) {
            (0, error_helpers_1._handleError)(error);
        }
    }
};
__decorate([
    (0, common_1.Put)('/update-user-password'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateUserPassword_dto_1.updateUserPasswordDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserPassword", null);
__decorate([
    (0, common_1.Post)('/movie/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movie_dto_1.createMovieDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createMoive", null);
__decorate([
    (0, common_1.Get)('/movie/select/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "selectMoive", null);
__decorate([
    (0, common_1.Get)('/movie/rank'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "listMoivesByRate", null);
__decorate([
    (0, common_1.Put)('/update-user-profile'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateUserProfile_dto_1.UpdateUserProfileDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserProfile", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
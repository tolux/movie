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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_helpers_1 = require("../helpers/auth.helpers");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const movie_service_1 = require("../movie/movie.service");
let UsersService = class UsersService {
    constructor(userRepository, movieService) {
        this.userRepository = userRepository;
        this.movieService = movieService;
    }
    async findUserById(id) {
        if (!id)
            return undefined;
        return await this.userRepository.findOne({
            where: { id },
            relations: ['movies'],
        });
    }
    async findUserByEmail(email) {
        if (!email)
            return undefined;
        return await this.userRepository.findOne({ where: { email } });
    }
    async getAllMovies() {
        return await this.movieService.findAll();
    }
    async createUser(data) {
        const user = await this.findUserByEmail(data.email);
        if (user) {
            throw new common_1.HttpException('a user with this email address already exists', common_1.HttpStatus.FORBIDDEN);
        }
        const password = await auth_helpers_1.authHelpers.hashPassword(data.password);
        await this.userRepository.save(Object.assign(Object.assign({}, data), { password }));
        return true;
    }
    async updateUserPassword(data) {
        const user = await this.findUserById(data.id);
        if (!(await auth_helpers_1.authHelpers.verifyPassword(data.currentPassword, user.password))) {
            throw new common_1.UnauthorizedException();
        }
        const updateData = {
            id: data.id,
            password: await auth_helpers_1.authHelpers.hashPassword(data.password),
        };
        return await this.updateUser(updateData);
    }
    async selectMoive(movieId, id) {
        const userExists = await this.findUserById(id);
        if (!userExists)
            throw new common_1.HttpException('invalid id', common_1.HttpStatus.BAD_REQUEST);
        const data = { userExists, movieId };
        await this.movieService.saveSelect(data);
        return await this.findUserById(id);
    }
    async createMoive(data, id) {
        const userExists = await this.findUserById(id);
        if (!userExists)
            throw new common_1.HttpException('invalid id', common_1.HttpStatus.BAD_REQUEST);
        return await this.movieService.createMovie(data);
    }
    async listMoivesByRate(id) {
        const userExists = await this.findUserById(id);
        if (!userExists)
            throw new common_1.HttpException('invalid id', common_1.HttpStatus.BAD_REQUEST);
        return await this.userRepository.find({
            relations: ['movies'],
            where: {
                id,
            },
            order: {
                movies: {
                    rate: 'DESC',
                },
            },
        });
    }
    async updateUser(data) {
        const { id, created_at, updated_at, email, full_name } = data, rest = __rest(data, ["id", "created_at", "updated_at", "email", "full_name"]);
        const userExists = await this.findUserById(id);
        if (!userExists)
            throw new common_1.HttpException('invalid id', common_1.HttpStatus.BAD_REQUEST);
        await this.userRepository.update({ id }, rest);
        const updatedUser = await this.findUserById(id);
        return auth_helpers_1.authHelpers.serializeUser(updatedUser);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        movie_service_1.MovieService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
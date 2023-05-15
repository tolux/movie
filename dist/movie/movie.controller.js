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
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movie_service_1 = require("./movie.service");
const auth_public_1 = require("../constants/auth.public");
const error_helpers_1 = require("../helpers/error.helpers");
const update_movie_dto_1 = require("./dto/update-movie.dto");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async findAll() {
        return await this.movieService.findAll();
    }
    async findOne(id) {
        return await this.movieService.findMovieById(id);
    }
    async update(updateMovieDto) {
        try {
            const data = await this.movieService.update(updateMovieDto);
            return { data, status: common_1.HttpStatus.OK, message: 'movie updated' };
        }
        catch (error) {
            (0, error_helpers_1._handleError)(error);
        }
    }
    async remove(id) {
        try {
            await this.movieService.remove(id);
            return { status: common_1.HttpStatus.OK, message: 'movie deleted' };
        }
        catch (error) {
            (0, error_helpers_1._handleError)(error);
        }
    }
};
__decorate([
    (0, common_1.Get)('get-all-movies'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('get-single-movie/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_movie_dto_1.updateMovieDto]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "remove", null);
MovieController = __decorate([
    (0, auth_public_1.Public)(),
    (0, common_1.Controller)('movie'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
exports.MovieController = MovieController;
//# sourceMappingURL=movie.controller.js.map
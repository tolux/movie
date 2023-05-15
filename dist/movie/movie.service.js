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
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const movie_entity_1 = require("./entities/movie.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let MovieService = class MovieService {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }
    async findAll() {
        return await this.movieRepository.find();
    }
    async saveSelect(data) {
        const movieExist = await this.movieRepository.find({
            where: { id: data.movieId },
        });
        if (movieExist.length) {
            await this.movieRepository.update({ id: data.movieId }, { user: data.userExists });
            return true;
        }
        throw new common_1.HttpException('invalid id', common_1.HttpStatus.BAD_REQUEST);
    }
    async getMoviesByName(name) {
        const movieExist = await this.movieRepository.find({ where: { name } });
        if (movieExist.length) {
            throw new common_1.HttpException('movie name already exists', common_1.HttpStatus.FORBIDDEN);
        }
        return true;
    }
    async createMovie(data) {
        await this.getMoviesByName(data.name);
        await this.movieRepository.save(data);
        return await this.movieRepository.save(data);
    }
    async findMovieById(id) {
        const movieExit = await this.movieRepository.find({ where: { id } });
        if (!movieExit.length)
            throw new common_1.HttpException('invalid id', common_1.HttpStatus.BAD_REQUEST);
        return movieExit;
    }
    async update(data) {
        const { id, created_at, updated_at } = data, rest = __rest(data, ["id", "created_at", "updated_at"]);
        if (data.name &&
            (await this.movieRepository.find({ where: { name: data.name } }))) {
            throw new common_1.HttpException('movie name already exists', common_1.HttpStatus.FORBIDDEN);
        }
        await this.findMovieById(id);
        await this.movieRepository.update({ id }, rest);
        const updatMovie = await this.findMovieById(id);
        return updatMovie;
    }
    async remove(id) {
        await this.findMovieById(id);
        await this.movieRepository.delete(id);
        return true;
    }
};
MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movie_entity_1.Movie)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map
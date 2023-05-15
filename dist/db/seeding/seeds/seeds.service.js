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
var SeedsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const admin_entity_1 = require("../../../admin/entities/admin.entity");
const admin_data_1 = require("../data/admin.data");
const movie_entity_1 = require("../../../movie/entities/movie.entity");
const movie_data_1 = require("../data/movie.data");
let SeedsService = SeedsService_1 = class SeedsService {
    constructor(movieRepository, adminRepository) {
        this.movieRepository = movieRepository;
        this.adminRepository = adminRepository;
        this.logger = new common_1.Logger(SeedsService_1.name);
    }
    async onModuleInit() {
        await this.seedMovieAPI();
        await this.seedAdmin();
    }
    async seedMovieAPI() {
        try {
            this.logger.log('seeding movies ');
            const currentQuestions = await this.movieRepository.find();
            if (currentQuestions.length === 0) {
                for (const movie of movie_data_1.moviesData) {
                    await this.movieRepository.save(movie);
                }
            }
            this.logger.log('done seeding risk movies');
        }
        catch (error) {
            this.logger.log(error);
        }
    }
    async seedAdmin() {
        try {
            this.logger.log('seeding  admin');
            const admin = await this.adminRepository.findOne({
                where: { username: admin_data_1.default_admin.username },
            });
            if (!admin) {
                await this.adminRepository.save(admin_data_1.default_admin);
            }
            this.logger.log('done seeding  admin');
        }
        catch (error) {
            this.logger.log(error);
        }
    }
};
SeedsService = SeedsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movie_entity_1.Movie)),
    __param(1, (0, typeorm_1.InjectRepository)(admin_entity_1.AdminEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SeedsService);
exports.SeedsService = SeedsService;
//# sourceMappingURL=seeds.service.js.map
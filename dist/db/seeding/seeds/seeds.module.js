"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const seeds_service_1 = require("./seeds.service");
const admin_entity_1 = require("../../../admin/entities/admin.entity");
const movie_entity_1 = require("../../../movie/entities/movie.entity");
let SeedsModule = class SeedsModule {
};
SeedsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([movie_entity_1.Movie, admin_entity_1.AdminEntity])],
        controllers: [],
        providers: [seeds_service_1.SeedsService],
    })
], SeedsModule);
exports.SeedsModule = SeedsModule;
//# sourceMappingURL=seeds.module.js.map
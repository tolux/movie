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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const db_helpers_1 = require("../../helpers/db.helpers");
const typeorm_1 = require("typeorm");
const app_types_1 = require("../../@types/app.types");
const otp_entity_1 = require("../../auth/entities/otp.entity");
const movie_entity_1 = require("../../movie/entities/movie.entity");
let UserEntity = class UserEntity extends db_helpers_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "full_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "verified", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ enum: app_types_1.ERoles, default: app_types_1.ERoles.USER, type: 'enum' }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => otp_entity_1.OtpEntity, (otpEntity) => otpEntity.user, {
        cascade: true,
    }),
    __metadata("design:type", otp_entity_1.OtpEntity)
], UserEntity.prototype, "otp", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => movie_entity_1.Movie, (movies) => movies.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "movies", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)()
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map
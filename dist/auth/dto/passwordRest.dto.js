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
exports.passwordResetDto = void 0;
const class_validator_1 = require("class-validator");
const decorators_helpers_1 = require("../../helpers/decorators.helpers");
class passwordResetDto {
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], passwordResetDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
    }),
    __metadata("design:type", String)
], passwordResetDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, decorators_helpers_1.Match)('password'),
    __metadata("design:type", String)
], passwordResetDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}),
    (0, class_validator_1.Min)(100000),
    (0, class_validator_1.Max)(999999),
    __metadata("design:type", Number)
], passwordResetDto.prototype, "otp", void 0);
exports.passwordResetDto = passwordResetDto;
//# sourceMappingURL=passwordRest.dto.js.map
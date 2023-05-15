"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneOfOptionalRequired = exports.Match = exports.OneOfOptionalRequiredConstraint = exports.MatchConstraint = void 0;
const class_validator_1 = require("class-validator");
const Match = (property, validationOptions) => {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            validator: MatchConstraint,
        });
    };
};
exports.Match = Match;
let MatchConstraint = class MatchConstraint {
    validate(value, args) {
        const [relatedPropertyName] = args.constraints;
        const relatedValue = args.object[relatedPropertyName];
        return value === relatedValue;
    }
    defaultMessage(args) {
        const [relatedPropertyName] = args.constraints;
        return `${relatedPropertyName} and ${args.property} don't match`;
    }
};
MatchConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'Match' })
], MatchConstraint);
exports.MatchConstraint = MatchConstraint;
const OneOfOptionalRequired = (property, validationOptions) => {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            validator: OneOfOptionalRequiredConstraint,
        });
    };
};
exports.OneOfOptionalRequired = OneOfOptionalRequired;
let OneOfOptionalRequiredConstraint = class OneOfOptionalRequiredConstraint {
    validate(value, args) {
        const [relatedPropertyName] = args.constraints;
        const relatedValue = args.object[relatedPropertyName];
        return (!!value && typeof value === 'string') || !!relatedValue;
    }
    defaultMessage(args) {
        const [relatedPropertyName] = args.constraints;
        if ((args === null || args === void 0 ? void 0 : args.value) && typeof (args === null || args === void 0 ? void 0 : args.value) !== 'string')
            return `${args.property} must be a string`;
        return `either ${relatedPropertyName} or ${args.property} is required`;
    }
};
OneOfOptionalRequiredConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'OneOfOptionalRequired' })
], OneOfOptionalRequiredConstraint);
exports.OneOfOptionalRequiredConstraint = OneOfOptionalRequiredConstraint;
//# sourceMappingURL=decorators.helpers.js.map
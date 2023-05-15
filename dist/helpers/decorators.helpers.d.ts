import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
declare const Match: (property: string, validationOptions?: ValidationOptions) => (object: any, propertyName: string) => void;
export declare class MatchConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
declare const OneOfOptionalRequired: (property: string, validationOptions?: ValidationOptions) => (object: any, propertyName: string) => void;
export declare class OneOfOptionalRequiredConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export { Match, OneOfOptionalRequired };

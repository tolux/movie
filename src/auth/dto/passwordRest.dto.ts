import {
  IsEmail,
  IsNumber,
  IsString,
  Matches,
  Max,
  Min,
  MinLength,
} from 'class-validator';
import { Match } from 'src/helpers/decorators.helpers';

export class passwordResetDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsString()
  @Match('password')
  confirmPassword: string;

  @IsNumber({})
  @Min(100000)
  @Max(999999)
  otp: number;
}

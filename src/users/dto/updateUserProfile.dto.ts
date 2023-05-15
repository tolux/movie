import { IsOptional, IsString } from 'class-validator';

export class UpdateUserProfileDto {
  @IsString()
  @IsOptional()
  dob: Date;

  @IsString()
  @IsOptional()
  address: string;
}

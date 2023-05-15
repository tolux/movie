import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber, IsOptional, Min, Max } from 'class-validator';
import { Movie } from '../entities/movie.entity';

export class updateMovieDto {
  @IsString()
  id: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  url: string;

  @Min(1)
  @Max(5)
  @IsNumber()
  @IsOptional()
  rate: number;
}

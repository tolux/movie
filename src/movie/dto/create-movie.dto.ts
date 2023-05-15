import { IsNumber, IsString, Min, Max } from 'class-validator';
import { BaseEntity } from 'src/helpers/db.helpers';

export class createMovieDto extends BaseEntity {
  @IsString()
  name: string;

  @IsString()
  url: string;

  @Min(1)
  @Max(5)
  @IsNumber()
  rate: number;
}

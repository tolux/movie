import { BaseEntity } from 'src/helpers/db.helpers';
export declare class createMovieDto extends BaseEntity {
    name: string;
    url: string;
    rate: number;
}

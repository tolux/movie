import { BaseEntity } from 'src/helpers/db.helpers';
import { ERoles } from 'src/@types/app.types';
import { OtpEntity } from 'src/auth/entities/otp.entity';
import { Movie } from 'src/movie/entities/movie.entity';
export declare class UserEntity extends BaseEntity {
    full_name: string;
    email: string;
    verified: boolean;
    password: string;
    role: ERoles;
    otp: OtpEntity;
    movies: Movie[];
}

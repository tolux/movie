import { BaseEntity } from 'src/helpers/db.helpers';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class Movie extends BaseEntity {
    name: string;
    url: string;
    rate: number;
    user: UserEntity;
}

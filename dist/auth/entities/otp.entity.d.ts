import { BaseEntity } from 'src/helpers/db.helpers';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class OtpEntity extends BaseEntity {
    email: string;
    otp: number;
    expiration: string;
    user: UserEntity;
}

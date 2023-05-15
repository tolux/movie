import { ERoles } from 'src/@types/app.types';
import { BaseEntity } from 'src/helpers/db.helpers';
export declare class AdminEntity extends BaseEntity {
    username: string;
    password: string;
    role: ERoles;
}

import { UserEntity } from 'src/users/entities/user.entity';
import { ISerializedAdmin, ISerializedUser } from 'src/@types/app.types';
export declare const authHelpers: {
    serializeUser: (user: UserEntity) => ISerializedUser;
    hashPassword: (password: string) => Promise<string>;
    verifyPassword: (password: string, hash: string) => Promise<boolean>;
    generateOtp: () => number;
    serializeAdmin: (admin: any) => ISerializedAdmin;
};

import { AdminEntity } from 'src/admin/entities/admin.entity';
import { UserEntity } from 'src/users/entities/user.entity';
type TMovie = {
    id: string;
    name: string;
    url: string;
    rate: string;
};
type TUpdateUserPassword = {
    id: string;
    currentPassword: string;
    password: string;
    confirmPassword: string;
};
type ISerializedUser = Omit<UserEntity, 'password' | 'otp'>;
type ISerializedAdmin = Omit<AdminEntity, 'password'>;
declare enum ERiskCategory {
    MID = "mid",
    LOW = "low",
    HIGH = "high"
}
declare enum EQuestionType {
    FREE_TEXT = "free_text",
    SINGLE_OPTION = "single_option"
}
declare enum ERoles {
    USER = "user",
    ADMIN = "admin"
}
type TMailOptions = {
    from?: string;
    to: string;
    subject: string;
    html: string;
};
interface IReturnObject<T> {
    data?: T;
    page?: number;
    total?: number;
}
export type { TMovie, ISerializedUser, TUpdateUserPassword, ISerializedAdmin, TMailOptions, };
export { ERiskCategory, EQuestionType, ERoles, IReturnObject };

import { HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { updateUserPasswordDto } from './dto/updateUserPassword.dto';
import { UpdateUserProfileDto } from './dto/updateUserProfile.dto';
import { createMovieDto } from 'src/movie/dto/create-movie.dto';
export declare class UserController {
    private usersService;
    constructor(usersService: UsersService);
    updateUserPassword(body: updateUserPasswordDto, req: any): Promise<{
        data: import("../@types/app.types").ISerializedUser;
        status: HttpStatus;
        message: string;
    }>;
    createMoive(body: createMovieDto, req: any): Promise<{
        data: any;
        status: HttpStatus;
        message: string;
    }>;
    selectMoive(id: string, req: any): Promise<{
        data: import("./entities/user.entity").UserEntity;
        status: HttpStatus;
    }>;
    listMoivesByRate(req: any): Promise<{
        data: import("./entities/user.entity").UserEntity[];
        status: HttpStatus;
    }>;
    updateUserProfile(body: UpdateUserProfileDto, req: any): Promise<{
        data: import("../@types/app.types").ISerializedUser;
        status: HttpStatus;
        message: string;
    }>;
}

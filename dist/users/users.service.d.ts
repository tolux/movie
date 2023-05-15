import { createUserDto } from 'src/auth/dto/createUser.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { ISerializedUser, TUpdateUserPassword } from 'src/@types/app.types';
import { Movie } from 'src/movie/entities/movie.entity';
import { createMovieDto } from 'src/movie/dto/create-movie.dto';
import { MovieService } from 'src/movie/movie.service';
export declare class UsersService {
    private userRepository;
    private movieService;
    constructor(userRepository: Repository<UserEntity>, movieService: MovieService);
    findUserById(id: string): Promise<UserEntity | undefined>;
    findUserByEmail(email: string): Promise<UserEntity | undefined>;
    getAllMovies(): Promise<Movie[]>;
    createUser(data: createUserDto): Promise<boolean>;
    updateUserPassword(data: TUpdateUserPassword): Promise<ISerializedUser>;
    selectMoive(movieId: string, id: string): Promise<UserEntity>;
    createMoive(data: createMovieDto, id: string): Promise<any>;
    listMoivesByRate(id: string): Promise<UserEntity[]>;
    updateUser(data: Partial<UserEntity>): Promise<ISerializedUser>;
}

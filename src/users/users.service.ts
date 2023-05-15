import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserDto } from 'src/auth/dto/createUser.dto';
import { authHelpers } from 'src/helpers/auth.helpers';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { ISerializedUser, TUpdateUserPassword } from 'src/@types/app.types';

import { Movie } from 'src/movie/entities/movie.entity';
import { createMovieDto } from 'src/movie/dto/create-movie.dto';
import { MovieService } from 'src/movie/movie.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,

    private movieService: MovieService,
  ) {}

  async findUserById(id: string): Promise<UserEntity | undefined> {
    if (!id) return undefined;
    return await this.userRepository.findOne({
      where: { id },
      relations: ['movies'],
    });
  }

  async findUserByEmail(email: string): Promise<UserEntity | undefined> {
    if (!email) return undefined;
    return await this.userRepository.findOne({ where: { email } });
  }

  async getAllMovies(): Promise<Movie[]> {
    return await this.movieService.findAll();
  }

  async createUser(data: createUserDto): Promise<boolean> {
    const user = await this.findUserByEmail(data.email);
    if (user) {
      throw new HttpException(
        'a user with this email address already exists',
        HttpStatus.FORBIDDEN,
      );
    }
    const password = await authHelpers.hashPassword(data.password);

    await this.userRepository.save({
      ...data,
      password,
    });
    return true;
  }

  async updateUserPassword(
    data: TUpdateUserPassword,
  ): Promise<ISerializedUser> {
    const user = await this.findUserById(data.id);
    if (
      !(await authHelpers.verifyPassword(data.currentPassword, user.password))
    ) {
      throw new UnauthorizedException();
    }
    const updateData = {
      id: data.id,
      password: await authHelpers.hashPassword(data.password),
    };
    return await this.updateUser(updateData);
  }

  async selectMoive(movieId: string, id: string) {
    const userExists = await this.findUserById(id);
    if (!userExists)
      throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
    const data = { userExists, movieId };
    await this.movieService.saveSelect(data);
    return await this.findUserById(id);
  }

  async createMoive(data: createMovieDto, id: string) {
    const userExists = await this.findUserById(id);
    if (!userExists)
      throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);

    return await this.movieService.createMovie(data);
  }

  async listMoivesByRate(id: string) {
    const userExists = await this.findUserById(id);
    if (!userExists)
      throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);

    return await this.userRepository.find({
      relations: ['movies'],
      where: {
        id,
      },
      order: {
        movies: {
          rate: 'DESC',
        },
      },
    });
  }

  async updateUser(data: Partial<UserEntity>): Promise<ISerializedUser> {
    const {
      id,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      created_at,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      updated_at,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      email,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      full_name,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ...rest
    } = data;
    const userExists = await this.findUserById(id);

    if (!userExists)
      throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
    await this.userRepository.update({ id }, rest);
    const updatedUser = await this.findUserById(id);
    return authHelpers.serializeUser(updatedUser);
  }
}

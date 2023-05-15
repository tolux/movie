import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Movie } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createMovieDto } from './dto/create-movie.dto';
import { TMovie } from 'src/@types/app.types';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return await this.movieRepository.find();
  }

  async saveSelect(data: any) {
    const movieExist = await this.movieRepository.find({
      where: { id: data.movieId },
    });

    if (movieExist.length) {
      await this.movieRepository.update(
        { id: data.movieId },
        { user: data.userExists },
      );

      return true;
    }
    throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
  }

  async getMoviesByName(name: string) {
    const movieExist = await this.movieRepository.find({ where: { name } });

    if (movieExist.length) {
      throw new HttpException(
        'movie name already exists',
        HttpStatus.FORBIDDEN,
      );
    }
    return true;
  }
  async createMovie(data: createMovieDto): Promise<any> {
    await this.getMoviesByName(data.name);

    await this.movieRepository.save(data);

    return await this.movieRepository.save(data);
  }

  async findMovieById(id: string): Promise<Movie[]> {
    const movieExit = await this.movieRepository.find({ where: { id } });

    if (!movieExit.length)
      throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
    return movieExit;
  }

  async update(data: Partial<Movie>): Promise<Movie[]> {
    const { id, created_at, updated_at, ...rest } = data;

    if (
      data.name &&
      (await this.movieRepository.find({ where: { name: data.name } }))
    ) {
      throw new HttpException(
        'movie name already exists',
        HttpStatus.FORBIDDEN,
      );
    }
    await this.findMovieById(id);
    await this.movieRepository.update({ id }, rest);
    const updatMovie = await this.findMovieById(id);
    return updatMovie;
  }

  async remove(id: string): Promise<boolean> {
    await this.findMovieById(id);
    await this.movieRepository.delete(id);
    return true;
  }
}

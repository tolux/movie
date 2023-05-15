import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AdminEntity } from 'src/admin/entities/admin.entity';
import { default_admin } from '../data/admin.data';
import { Movie } from 'src/movie/entities/movie.entity';
import { moviesData } from '../data/movie.data';

@Injectable()
export class SeedsService implements OnModuleInit {
  logger = new Logger(SeedsService.name);
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
  ) {}

  async onModuleInit() {
    await this.seedMovieAPI();
    await this.seedAdmin();
  }

  async seedMovieAPI() {
    try {
      this.logger.log('seeding movies ');
      const currentQuestions = await this.movieRepository.find();
      if (currentQuestions.length === 0) {
        for (const movie of moviesData) {
          await this.movieRepository.save(movie);
        }
      }
      this.logger.log('done seeding risk movies');
    } catch (error) {
      this.logger.log(error);
    }
  }
  async seedAdmin() {
    try {
      this.logger.log('seeding  admin');

      const admin = await this.adminRepository.findOne({
        where: { username: default_admin.username },
      });
      if (!admin) {
        await this.adminRepository.save(default_admin);
      }

      this.logger.log('done seeding  admin');
    } catch (error) {
      this.logger.log(error);
    }
  }
}

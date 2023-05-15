import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedsService } from './seeds.service';

import { AdminEntity } from 'src/admin/entities/admin.entity';
import { Movie } from 'src/movie/entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, AdminEntity])],
  controllers: [],
  providers: [SeedsService],
})
export class SeedsModule {}

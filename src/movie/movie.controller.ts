import {
  Controller,
  Get,
  Body,
  Param,
  Delete,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { Public } from 'src/constants/auth.public';
import { _handleError } from 'src/helpers/error.helpers';
import { Movie } from './entities/movie.entity';
import { updateMovieDto } from './dto/update-movie.dto';

@Public()
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('get-all-movies')
  async findAll() {
    return await this.movieService.findAll();
  }

  @Get('get-single-movie/:id')
  async findOne(@Param('id') id: string) {
    return await this.movieService.findMovieById(id);
  }

  @Put('/update')
  async update(@Body() updateMovieDto: updateMovieDto) {
    try {
      const data = await this.movieService.update(updateMovieDto);
      return { data, status: HttpStatus.OK, message: 'movie updated' };
    } catch (error) {
      _handleError(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.movieService.remove(id);
      return { status: HttpStatus.OK, message: 'movie deleted' };
    } catch (error) {
      _handleError(error);
    }
  }
}

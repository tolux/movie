import { HttpStatus } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './entities/movie.entity';
import { updateMovieDto } from './dto/update-movie.dto';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    findAll(): Promise<Movie[]>;
    findOne(id: string): Promise<Movie[]>;
    update(updateMovieDto: updateMovieDto): Promise<{
        data: Movie[];
        status: HttpStatus;
        message: string;
    }>;
    remove(id: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
}

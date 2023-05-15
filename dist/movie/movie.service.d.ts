import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { createMovieDto } from './dto/create-movie.dto';
export declare class MovieService {
    private movieRepository;
    constructor(movieRepository: Repository<Movie>);
    findAll(): Promise<Movie[]>;
    saveSelect(data: any): Promise<boolean>;
    getMoviesByName(name: string): Promise<boolean>;
    createMovie(data: createMovieDto): Promise<any>;
    findMovieById(id: string): Promise<Movie[]>;
    update(data: Partial<Movie>): Promise<Movie[]>;
    remove(id: string): Promise<boolean>;
}

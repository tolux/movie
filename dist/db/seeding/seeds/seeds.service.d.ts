import { Logger, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AdminEntity } from 'src/admin/entities/admin.entity';
import { Movie } from 'src/movie/entities/movie.entity';
export declare class SeedsService implements OnModuleInit {
    private movieRepository;
    private adminRepository;
    logger: Logger;
    constructor(movieRepository: Repository<Movie>, adminRepository: Repository<AdminEntity>);
    onModuleInit(): Promise<void>;
    seedMovieAPI(): Promise<void>;
    seedAdmin(): Promise<void>;
}

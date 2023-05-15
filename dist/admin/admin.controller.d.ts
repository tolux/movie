import { AdminService } from './admin.service';
import { createMovieDto } from 'src/movie/dto/create-movie.dto';
import { updateMovieDto } from 'src/movie/dto/update-movie.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    deleteInvestmentPlan(id: string): Promise<void>;
    updateInvestmentPlan(updateMovieDto: updateMovieDto): Promise<void>;
    createInvestmentPlan(createMovieDto: createMovieDto): Promise<void>;
}

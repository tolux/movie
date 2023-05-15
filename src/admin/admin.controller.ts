import {
  Controller,
  Param,
  Delete,
  HttpStatus,
  Put,
  Body,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminGuard } from 'src/guard/admin.guard';
import { createMovieDto } from 'src/movie/dto/create-movie.dto';
import { updateMovieDto } from 'src/movie/dto/update-movie.dto';

@UseGuards(AdminGuard)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

}

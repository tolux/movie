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

  @Delete('/delete-movie/:id')
  async deleteInvestmentPlan(@Param('id') id: string) {
    // const data = await this.adminService.deleteInvestmentPlan(id);
    // return { data, status: HttpStatus.OK, message: 'investment plan deleted' };
  }
  @Put('/update-movie')
  async updateInvestmentPlan(@Body() updateMovieDto: updateMovieDto) {
    // const data = await this.adminService.updateInvestmentPlan(
    //   updateMovieDto,
    // );
    // return { data, status: HttpStatus.OK, message: 'investment plan updated' };
  }

  @Post('/create-movie')
  async createInvestmentPlan(@Body() createMovieDto: createMovieDto) {
    // const data = await this.adminService.createInvestmentPlan(
    //   createMovieDto,
    // );
    // return { data, status: HttpStatus.OK, message: 'investment plan created' };
  }
}

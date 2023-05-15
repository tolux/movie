import {
  Controller,
  Put,
  Request,
  Body,
  HttpStatus,
  Post,
  Get,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { _handleError } from 'src/helpers/error.helpers';
import { updateUserPasswordDto } from './dto/updateUserPassword.dto';
import { UpdateUserProfileDto } from './dto/updateUserProfile.dto';

import { createMovieDto } from 'src/movie/dto/create-movie.dto';
@Controller('users')
export class UserController {
  constructor(private usersService: UsersService) {}

  @Put('/update-user-password')
  async updateUserPassword(
    @Body() body: updateUserPasswordDto,
    @Request() req: any,
  ) {
    try {
      const id = req['user'];

      const data = await this.usersService.updateUserPassword({
        ...body,
        id,
      });
      return { data, status: HttpStatus.OK, message: 'password updated' };
    } catch (error) {
      _handleError(error);
    }
  }

  @Post('/movie/create')
  async createMoive(@Body() body: createMovieDto, @Request() req: any) {
    try {
      const userId = req['user'];
      const data = await this.usersService.createMoive(body, userId);
      return { data, status: HttpStatus.OK, message: 'movie  created' };
    } catch (error) {
      _handleError(error);
    }
  }
  @Get('/movie/select/:id')
  async selectMoive(@Param('id') id: string, @Request() req: any) {
    try {
      const userId = req['user'];
      const data = await this.usersService.selectMoive(id, userId);
      return { data, status: HttpStatus.OK };
    } catch (error) {
      _handleError(error);
    }
  }
  @Get('/movie/rank')
  async listMoivesByRate(@Request() req: any) {
    try {
      const userId = req['user'];
      const data = await this.usersService.listMoivesByRate(userId);
      return { data, status: HttpStatus.OK };
    } catch (error) {
      _handleError(error);
    }
  }

  @Put('/update-user-profile')
  async updateUserProfile(
    @Body() body: UpdateUserProfileDto,
    @Request() req: any,
  ) {
    try {
      const id = req['user'];
      const data = await this.usersService.updateUser({ ...body, id });
      return { data, status: HttpStatus.OK, message: 'profile updated' };
    } catch (error) {
      _handleError(error);
    }
  }
}

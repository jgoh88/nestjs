import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getUsers() {
    return this.userService.getAll();
  }

  @Post()
  createUser(@Body() reqBody: CreateUserDTO) {
    return this.userService.create(reqBody);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.get(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('/:userId')
  updateUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() reqBody: UpdateUserDTO,
  ) {
    return this.userService.update(userId, reqBody);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}

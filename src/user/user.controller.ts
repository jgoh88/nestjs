import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getAll();
  }

  @Post()
  createUser(@Body() reqBody: CreateUserDTO) {
    return this.userService.create(reqBody);
  }

  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.get(userId);
  }

  @Patch('/:userId')
  updateUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() reqBody: UpdateUserDTO,
  ) {
    return this.userService.update(userId, reqBody);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}

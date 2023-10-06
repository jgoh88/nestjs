import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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
  getUser(@Param() params: { userId: string }) {
    return this.userService.get(params);
  }

  @Patch('/:userId')
  updateUser(
    @Param() params: { userId: string },
    @Body() reqBody: UpdateUserDTO,
  ) {
    return this.userService.update(params, reqBody);
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: string }) {
    return this.userService.delete(params);
  }
}

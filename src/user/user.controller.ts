import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('/user')
export class UserController {
  @Get()
  getUser() {
    return { method: 'GET', name: 'Name', email: 'email@test.com' };
  }

  @Post()
  createUser(@Body() reqBody: any) {
    return { method: 'POST', reqBody };
  }

  @Get('/:userId')
  getSingleUser(@Param() params: { userId: string }) {
    return { method: 'GET', params };
  }

  @Patch('/:userId')
  updateSingleUser(@Param() params: { userId: string }, @Body() reqBody: any) {
    return { method: 'PATCH', params, reqBody };
  }

  @Delete('/:userId')
  deleteSingleUser(@Param() params: { userId: string }) {
    return { method: 'DELETE', params };
  }
}

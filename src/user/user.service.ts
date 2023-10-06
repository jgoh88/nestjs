import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

type Params = {
  userId: string;
};

@Injectable()
export class UserService {
  getAll() {
    return {
      method: 'GET',
      users: [{ name: 'Name', email: 'email@test.com' }],
    };
  }

  create(reqBody: CreateUserDTO) {
    return { method: 'POST', reqBody };
  }

  get(params: Params) {
    return { method: 'GET', params };
  }

  update(params: Params, reqBody: UpdateUserDTO) {
    return { method: 'PATCH', params, reqBody };
  }

  delete(params: Params) {
    return { method: 'DELETE', params };
  }
}

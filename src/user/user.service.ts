import { Injectable } from '@nestjs/common';

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

  create(reqBody: any) {
    return { method: 'POST', reqBody };
  }

  get(params: Params) {
    return { method: 'GET', params };
  }

  update(params: Params, reqBody: any) {
    return { method: 'PATCH', params, reqBody };
  }

  delete(params: Params) {
    return { method: 'DELETE', params };
  }
}

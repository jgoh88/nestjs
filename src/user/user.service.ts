import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(reqBody: CreateUserDTO) {
    const user = reqBody;
    user.password = bcrypt.hashSync(user.password, 10);
    return this.userRepository.save(user);
  }

  get(userId) {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  update(userId, reqBody: UpdateUserDTO) {
    return this.userRepository.update(userId, reqBody);
  }

  delete(userId) {
    return this.userRepository.delete(userId);
  }

  findOne(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async validatePassword(user, password: string) {
    return bcrypt.compareSync(password, user.password);
  }
}

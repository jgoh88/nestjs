import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

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
    return this.userRepository.save(reqBody);
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
}

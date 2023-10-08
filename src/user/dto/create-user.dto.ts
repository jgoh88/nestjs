import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}

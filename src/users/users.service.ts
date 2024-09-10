import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { User } from "./schemas/user.schema";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async registerUser(
    email: string,
    password: string,
    username: string,
  ): Promise<User> {
    return this.usersRepository.create({
      email,
      password,
      username,
    });
  }
  async getUserByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({
      email,
    });
  }
}

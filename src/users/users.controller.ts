import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./schemas/user.schema";
import { RegisterUserDto } from "./dto/registerUser.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("register")
  async registerUser(@Body() createUserDto: RegisterUserDto): Promise<User> {
    return this.usersService.registerUser(
      createUserDto.email,
      createUserDto.password,
      createUserDto.username,
    );
  }
}

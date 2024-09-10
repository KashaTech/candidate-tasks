import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";
import { jwtSecret } from "./constants";
import { User } from "src/users/schemas/user.schema";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(email: string, password: string) {
    const user = await this.usersService.getUserByEmail(email);
    if (!user) {
      return null;
    }
    if (user.password !== password) {
      return null;
    }
    return user;
  }

  async login(userAuth: User): Promise<{ access_token: string }> {
    const user = await this.usersService.getUserByEmail(userAuth.email);
    if (user?.password === userAuth.password) {
      const payload = { email: user.email, sub: user.username };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    throw new UnauthorizedException("Wrong credentials");
  }

  async verifyToken(token: string) {
    const decoded = this.jwtService.verify(token, {
      secret: jwtSecret,
    });

    return this.usersService.getUserByEmail(decoded.email);
  }
}

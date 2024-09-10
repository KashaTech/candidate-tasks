import { Controller, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/localAuth.guard";
import { Request } from "express";
import { User } from "src/users/schemas/user.schema";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Req() req: Request): Promise<{ access_token: string }> {
    return this.authService.login(req.user as User);
  }
}

import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtSecret } from "./constants";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { AuthController } from "./auth.controller";

@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      defaultStrategy: "jwt",
    }),
    JwtModule.register({
      secret: jwtSecret,
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

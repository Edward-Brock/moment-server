import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { OptionModule } from '../option/option.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthStrategy } from './auth.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
    OptionModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthStrategy],
  exports: [AuthModule],
})
export class AuthModule {}

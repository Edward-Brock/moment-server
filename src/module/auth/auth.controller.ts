import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  //使用jwt验证token的端口
  @UseGuards(AuthGuard('jwt'))
  @Post('tryToken')
  backInfo(@Req() req) {
    return req.user;
  }

  @Post('getToken')
  getTokenByUserId(@Body() user: any) {
    return this.authService.createToken(user);
  }
}

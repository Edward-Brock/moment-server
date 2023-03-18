import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload): Promise<any> {
    if (!payload.option_name && !payload.password) {
      return false;
    }
    //返回后可在req中得到返回的值
    return { option_name: payload.option_name, password: payload.password };
  }
}

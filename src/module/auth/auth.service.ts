import { Injectable } from '@nestjs/common';
import { OptionService } from '../option/option.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly optionService: OptionService,
  ) {}

  async createToken(user) {
    const payload = {
      option_value: user.password,
    };
    const option: any = await this.optionService.findOne(4);
    if (option) {
      const isMatch = bcrypt.compareSync(user.password, option[0].option_value);
      if (!isMatch) {
        return { code: 1, msg: '登录失败', data: '' };
      }
      return {
        code: 0,
        msg: '登录成功',
        data: {
          token: this.jwtService.sign(payload),
        },
      };
    }
  }
}

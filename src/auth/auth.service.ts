import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '~/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '~/users/users.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);

    if (!user || !user.passwordHash)
      throw new BadRequestException('login_failed');

    const isPasswordMatched = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordMatched) throw new BadRequestException('login_failed');

    return user;
  }

  async signIn(user: User) {
    const payload = { emai: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}

import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from '~/core/current-user.decorator';
import { User } from '~/users/users.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('sign-in')
  async signIn(@CurrentUser() user: User) {
    return this.authService.signIn(user);
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { SigninDto, SignupDto } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: SignupDto) {
    await this.authService.signup(body)

    return body
  }
  
  @Post('signin')
  async signin(@Body() body: SigninDto) {
    await this.authService.signin(body) 

    return body
  }

}

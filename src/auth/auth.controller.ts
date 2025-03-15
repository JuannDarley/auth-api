import { Body, Controller, Post } from '@nestjs/common';
import type { SigninDto, SignupDto } from './dtos/auth';

@Controller('auth')
export class AuthController {
  @Post('signup')
  async signup(@Body() body: SignupDto) {
    console.log(body)

    return body
  }
  
  @Post('signin')
  async signin(@Body() body: SigninDto) {
    console.log(body)

    return body
  }

}

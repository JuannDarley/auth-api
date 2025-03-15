import { Injectable } from '@nestjs/common';
import type { SigninDto, SignupDto } from './dtos/auth';

@Injectable()
export class AuthService {
  async signup(data: SignupDto) {
    console.log(data)

    return 'singup'
  }

  signin(data: SigninDto) {
    console.log(data)
    
    return 'signin'
  }
}

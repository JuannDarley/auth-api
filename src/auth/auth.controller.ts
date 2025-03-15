import { Body, Controller, Post } from '@nestjs/common'
import { SigninDto, SignupDto } from './dtos/auth'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('signup')
	async signup(@Body() body: SignupDto) {
		return this.authService.signup(body)
	}

	@Post('signin')
	async signin(@Body() body: SigninDto) {
		return this.authService.signin(body)
	}
}

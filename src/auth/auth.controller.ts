/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { SigninDto, SignupDto } from './dtos/auth'
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard'

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

	@UseGuards(AuthGuard)
	@Get('me')
	async me(@Request() request) {
		return request.user
	}
}

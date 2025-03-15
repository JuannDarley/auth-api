/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsNotEmpty } from 'class-validator'

export class SignupDto {
	@IsNotEmpty()
	name: string

	@IsEmail()
	email: string

	@IsNotEmpty()
	password: string
}

export class SigninDto {
	@IsEmail()
	email: string

	@IsNotEmpty()
	password: string
}

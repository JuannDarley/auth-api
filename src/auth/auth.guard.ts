/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	Injectable,
	CanActivate,
	ExecutionContext,
	UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { jwtConstants } from './constats'

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private jwtService: JwtService) {}
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest()

		const token = this.extractTokenFromHeader(request)
		if (!token) {
			throw new UnauthorizedException('Token not found')
		}

		try {
			const payload = this.jwtService.verifyAsync(token, {
				secret: jwtConstants.secret,
			})

			request['user'] = payload
		} catch {
			throw new UnauthorizedException('Invalid token')
		}
		return true
	}

	private extractTokenFromHeader(request: Request): string | undefined {
		const [type, token] = request.headers['authorization'].split(' ') ?? []
		return type === 'Bearer' ? token : undefined
	}
}

import User from "#models/user";
import UsersService from "#services/users_service";
import { loginValidator, registerValidator } from "#validators/auth_validator";
import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";

@inject()
export default class UsersController {
    constructor(protected usersService: UsersService) { }

    /**
     * register a user
     */
    async register({ request, response }: HttpContext) {
        const data = await request.validateUsing(registerValidator);
        const user = await this.usersService.createUser(data as User);
        return response.created(user);
    }

    async login({ request, response }: HttpContext) {
        const { email, password } = await request.validateUsing(loginValidator);
        const user = this.usersService.loginUser(email, password);

        if (!user) response.abort("Invalid credentials");
        return user;
    }

    async current({ auth, response }: HttpContext) {
        try {
            const user = auth.getUserOrFail();
            return response.ok(user);
        } catch (error) {
            return response.unauthorized("User not found")
        }
    }

    async logout({ auth, response }: HttpContext) {
        const user = auth.getUserOrFail()
        const token = auth.user?.currentAccessToken.identifier
        return await this.usersService.logoutUser(user, token) ? response.ok("Logged out") : response.badRequest('Token not found')
    }
}
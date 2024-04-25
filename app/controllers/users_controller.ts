import UsersService from "#services/users_service";
import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";

@inject()
export default class UsersController {
    constructor(protected usersService: UsersService) { }

    /**
     * register a user
     */
    async register({ request }: HttpContext) {
        return await this.usersService.createUser(request.body().user);
    }

    async login({ request, response }: HttpContext) {
        const { email, password } = request.only(['email', 'password']);
        const user = this.usersService.loginUser(email, password);

        if (!user) response.abort("Invalid credentials");
        return user;
    }
}
import { inject } from "@adonisjs/core";
import LucidUsersRepository from "../repositories/lucid/lucid_users_repository.js";
import User from "#models/user";

@inject()
export default class UsersService {
    constructor(protected usersRepo: LucidUsersRepository) { }

    async getUserByEmail(email: string) {
        return this.usersRepo.getByEmail(email);
    }

    async createUser(user: User) {
        return this.usersRepo.create(user);
    }

    async loginUser(email: string, password: string) {
        const user = await User.verifyCredentials(email, password);
        if (!user) return null;

        return { user: user, token: await User.accessTokens.create(user) };
    }

    async logoutUser(user: User) {
        if (!user.currentAccessToken || !user.currentAccessToken.identifier) return false;
        await User.accessTokens.delete(user, user.currentAccessToken.identifier)
        return true;
    }
}
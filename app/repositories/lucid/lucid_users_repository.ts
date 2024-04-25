import User from "#models/user";
import UsersRepositoryInterface from "../interfaces/users_repository_interface.js";

export default class LucidUsersRepository implements UsersRepositoryInterface {

    async one(id: number): Promise<User> {
        return await User.findByOrFail('id', id);
    }

    async getByEmail(email: string): Promise<User> {
        return await User.findByOrFail('email', email);
    }

    async create(user: User): Promise<User> {
        return await User.create(user);
    }

}
import User from '#models/user'

export default interface UsersRepositoryInterface {
  /** Retrieve one by id */
  one(id: number): Promise<User>

  /** Create one */
  create(user: User): Promise<User>
}

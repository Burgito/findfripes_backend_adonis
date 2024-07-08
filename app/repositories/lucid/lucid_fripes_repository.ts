import Fripe from '#models/fripe'
import FripesRepositoryInterface from '../interfaces/fripes_repository_interface.js'
import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'

export default class LucidFripesRepository implements FripesRepositoryInterface {
  async all(page: number, limit: number): Promise<ModelPaginatorContract<Fripe>> {
    const fripes = await Fripe.query().preload('pictures').paginate(page, limit)
    return fripes
  }

  async allByCity(page: number, limit: number, city: string): Promise<Fripe[]> {
    const fripes = await Fripe.query().whereHas('address', (query) => {
      query.whereILike('city', city)
    }).paginate(page, limit)
    return fripes
  }

  async one(id: number): Promise<Fripe> {
    return await Fripe.query().where('id', id).preload('pictures').preload('comments').firstOrFail()
  }

  async create(fripe: Fripe): Promise<Fripe> {
    return await Fripe.create(fripe)
  }
}

import Fripe from '#models/fripe'
import FripesRepositoryInterface from '../interfaces/fripes_repository_interface.js'

export default class LucidFripesRepository implements FripesRepositoryInterface {
  async all(limit: number): Promise<Fripe[]> {
    const fripes = await Fripe.query().preload('pictures').limit(limit)
    return fripes
  }

  async allByCity(city: string): Promise<Fripe[]> {
    const fripes = await Fripe.query().whereHas('address', (query) => {
      query.whereILike('city', city)
    })
    return fripes
  }

  async one(id: number): Promise<Fripe> {
    return await Fripe.query().where('id', id).preload('pictures').preload('comments').firstOrFail()
  }

  async create(fripe: Fripe): Promise<Fripe> {
    return await Fripe.create(fripe)
  }
}

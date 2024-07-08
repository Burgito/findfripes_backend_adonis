import Fripe from '#models/fripe'
import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'

export default interface FripesRepositoryInterface {
  /** Retrieve all */
  all(page: number, limit: number): Promise<ModelPaginatorContract<Fripe>>

  /** Retrieve fripes by city */
  allByCity(page: number, limit: number, city: string): Promise<Fripe[]>

  /** Retrieve one by id */
  one(id: number): Promise<Fripe>

  /** Create one */
  create(fripe: Fripe): Promise<Fripe>
}

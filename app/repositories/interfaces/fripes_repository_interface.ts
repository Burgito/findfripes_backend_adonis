import Fripe from '#models/fripe'

export default interface FripesRepositoryInterface {
  /** Retrieve all */
  // TODO add limit to all
  // TODO get one by id
  all(): Promise<Fripe[]>

  /** Retrieve fripes by city */
  allByCity(city: string): Promise<Fripe[]>

  /** Retrieve one by id */
  one(id: number): Promise<Fripe>

  /** Create one */
  create(fripe: Fripe): Promise<Fripe>
}

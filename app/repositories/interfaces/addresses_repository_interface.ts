import Address from '#models/address'

export default interface AddressesRepositoryInterface {
  /** Retrieve all */
  all(): Promise<Address[]>

  /** Retrieve one by id */
  one(id: number): Promise<Address>

  /** Create one */
  create(address: Address): Promise<Address>

  citiesLike(city: string): Promise<string[]>

}

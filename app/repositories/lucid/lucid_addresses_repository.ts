import Address from '#models/address'
import AddressesRepositoryInterface from '../interfaces/addresses_repository_interface.js'

export default class LucidAddressesRepository implements AddressesRepositoryInterface {
  async all(): Promise<Address[]> {
    return await Address.all()
  }

  async allLimitOrderByCity(nb: number) {
    return await Address.query().limit(nb).orderBy('city')
  }

  async one(id: number): Promise<Address> {
    return await Address.findOrFail(id)
  }

  async create(address: Address): Promise<Address> {
    return await Address.create(address)
  }

  async citiesLike(city: string): Promise<Address[]> {
    const adresses = await Address.query().whereILike('city', `${city}%`).distinct('city')
    return adresses
  }
}

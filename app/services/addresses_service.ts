import { inject } from '@adonisjs/core'
import Address from '#models/address'
import LucidAddressesRepository from '../repositories/lucid/lucid_addresses_repository.js'

@inject()
export default class AddressesService {
  constructor(protected addressesRepo: LucidAddressesRepository) { }

  async getAllAddresses() {
    return await this.addressesRepo.all()
  }

  async getAllAddressesLimitOrderByCity(limit: number) {
    return await this.addressesRepo.allLimitOrderByCity(limit)
  }

  async createNewAddress(address: Address) {
    return await this.addressesRepo.create(address)
  }

  async getDistinctCitiesLike(city: string) {
    return await this.addressesRepo.citiesLike(city)
  }
}

import { inject } from '@adonisjs/core'
import LucidFripesRepository from '../repositories/lucid/lucid_fripes_repository.js'
import Fripe from '#models/fripe'
import Address from '#models/address'
import LucidAddressesRepository from '../repositories/lucid/lucid_addresses_repository.js'

@inject()
export default class FripesService {
  constructor(
    protected fripesRepo: LucidFripesRepository,
    protected addressRepo: LucidAddressesRepository
  ) { }

  async getAllFripes(limit: number) {
    return await this.fripesRepo.all(limit)
  }

  async getFripesByCity(city: string) {
    return await this.fripesRepo.allByCity(city)
  }

  async getOneFripe(id: number) {
    return await this.fripesRepo.one(id)
  }

  async createNewFripe(fripe: Fripe, address: Address) {
    const createdAddress = await this.addressRepo.create(address)

    fripe.addressId = createdAddress.id
    const createdFripe = await this.fripesRepo.create(fripe)
    if (!createdFripe) return

    await createdFripe.related('address').save(createdAddress)
  }

  async comment(userId: number, fripeId: number, comment: string) {
    const fripe = await this.fripesRepo.one(fripeId)
    if (!fripe) return false

    fripe.related('comments').create({ text: comment, userId: userId })
  }
}

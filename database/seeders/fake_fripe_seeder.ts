import { AddressFactory } from '#database/factories/address_factory'
import { FripeFactory } from '#database/factories/fripe_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const addresses = await AddressFactory.createMany(2000)
    let addressIndex = 0
    await FripeFactory.tap((row) => {
      row.addressId = addresses.at(addressIndex)!.id
      addressIndex++
    }).with('pictures', 2).createMany(2000)
    // Write your database queries inside the run method
  }
}

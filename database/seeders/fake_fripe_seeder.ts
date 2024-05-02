import { AddressFactory } from '#database/factories/address_factory'
import { FripeFactory } from '#database/factories/fripe_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const addresses = await AddressFactory.createMany(200)
    let addressIndex = 0
    await FripeFactory.tap((row) => {
      row.address_id = addresses.at(addressIndex)!.id
      addressIndex++
    }).createMany(200)
    // Write your database queries inside the run method
  }
}

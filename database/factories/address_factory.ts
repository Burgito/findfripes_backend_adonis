import factory from '@adonisjs/lucid/factories'
import Address from '#models/address'
import { FripeFactory } from './fripe_factory.js'

export const AddressFactory = factory
  .define(Address, async ({ faker }) => {
    return {
      line1: faker.location.streetAddress(),
      city: faker.location.city(),
      country: 'France',
      postCode: faker.location.zipCode(),
    }
  })
  .relation('fripe', () => FripeFactory)
  .build()

import factory from '@adonisjs/lucid/factories'
import Fripe from '#models/fripe'
import { AddressFactory } from './address_factory.js'

export const FripeFactory = factory
  .define(Fripe, async ({ faker }) => {
    return {
      name: faker.lorem.words(),
      shortDescription: faker.lorem.sentences().slice(255),
      longDescription: faker.lorem.paragraphs(),
    }
  })
  .relation('address', () => AddressFactory)
  .build()

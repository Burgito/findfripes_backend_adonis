import factory from '@adonisjs/lucid/factories'
import Fripe from '#models/fripe'
import { AddressFactory } from './address_factory.js'
import { FripePictureFactory } from './fripe_picture_factory.js'

export const FripeFactory = factory
  .define(Fripe, async ({ faker }) => {
    const coords = faker.location.nearbyGPSCoordinate({ origin: [43.6028236, 3.8829796], radius: 5, isMetric: true })
    return {
      name: faker.lorem.words(),
      shortDescription: faker.lorem.sentences().slice(255),
      longDescription: faker.lorem.paragraphs(),
      gpsCoordinates: coords[0] + ', ' + coords[1]
    }
  })
  .relation('address', () => AddressFactory)
  .relation('pictures', () => FripePictureFactory)
  .build()

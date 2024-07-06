import factory from '@adonisjs/lucid/factories'
import FripePicture from '#models/fripe_picture'
import { FripeFactory } from './fripe_factory.js'

export const FripePictureFactory = factory
  .define(FripePicture, async ({ faker }) => {
    return {
      shortDescription: faker.lorem.sentences(2).slice(255),
      filename: faker.image.urlLoremFlickr({ width: 255, height: 255 })
    }
  })
  .relation('fripe', () => FripeFactory)
  .build()

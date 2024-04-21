import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Address from './address.js'
import { type HasMany, type HasOne } from '@adonisjs/lucid/types/relations'
import ProductCategory from './product_category.js'
import FripePicture from './fripe_picture.js'

export default class Fripe extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare shortDescription: string

  @column()
  declare longDescription: string

  @column()
  declare gpsCoordinates: string

  @hasOne(() => Address)
  declare address: HasOne<typeof Address>

  @hasMany(() => ProductCategory)
  declare productCategories: HasMany<typeof ProductCategory>

  @hasMany(() => FripePicture)
  declare pictures: HasMany<typeof FripePicture>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
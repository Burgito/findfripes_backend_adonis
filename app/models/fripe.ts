import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne, manyToMany } from '@adonisjs/lucid/orm'
import Address from './address.js'
import { type ManyToMany, type HasMany, type HasOne } from '@adonisjs/lucid/types/relations'
import ProductCategory from './product_category.js'
import FripePicture from './fripe_picture.js'
import FripeComment from './fripe_comment.js'

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
  declare gpsCoordinates: string | null

  @column()
  declare addressId: number

  @hasOne(() => Address)
  declare address: HasOne<typeof Address>

  @manyToMany(() => ProductCategory)
  declare productCategories: ManyToMany<typeof ProductCategory>

  @hasMany(() => FripePicture)
  declare pictures: HasMany<typeof FripePicture>

  @hasMany(() => FripeComment)
  declare comments: HasMany<typeof FripeComment>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

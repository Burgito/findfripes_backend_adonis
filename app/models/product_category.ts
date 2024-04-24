import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Fripe from './fripe.js'
import { type ManyToMany } from '@adonisjs/lucid/types/relations'

export default class ProductCategory extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare iconFilename: string

  @column()
  declare shortDescription: string

  @column()
  declare longDescription: string | null

  @manyToMany(() => Fripe)
  declare productCategories: ManyToMany<typeof Fripe>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
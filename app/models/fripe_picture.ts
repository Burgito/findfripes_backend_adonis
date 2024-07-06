import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Fripe from './fripe.js'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'

export default class FripePicture extends BaseModel {
  // TODO copy constructor ?

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare filename: string

  @column()
  declare shortDescription: string

  @column()
  declare fripeId: string;

  @belongsTo(() => Fripe)
  declare fripe: BelongsTo<typeof Fripe>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

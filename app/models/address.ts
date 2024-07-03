import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Fripe from './fripe.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare line1: string

  @column()
  declare line2: string | null

  @column()
  declare line3: string | null

  @column()
  declare city: string

  @column()
  declare postCode: string

  @column()
  declare country: string

  @column()
  declare fripeId: number

  @belongsTo(() => Fripe)
  declare fripe: BelongsTo<typeof Fripe>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

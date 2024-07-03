import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import User from './user.js'
import { type BelongsTo, type HasOne } from '@adonisjs/lucid/types/relations'
import Fripe from './fripe.js'

export default class FripeComment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare text: string

  @column()
  declare fripeId: number

  @column()
  declare userId: number

  @hasOne(() => User)
  declare user: HasOne<typeof User>

  @belongsTo(() => Fripe)
  declare fripe: BelongsTo<typeof Fripe>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

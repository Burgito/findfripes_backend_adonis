import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import User from './user.js'
import { type HasOne } from '@adonisjs/lucid/types/relations'
import Fripe from './fripe.js'

export default class FripeComment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare text: string

  @hasOne(() => User)
  declare user: HasOne<typeof User>

  @hasOne(() => Fripe)
  declare fripe: HasOne<typeof Fripe>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
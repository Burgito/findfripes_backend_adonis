import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class FripePicture extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare filename: string

  @column()
  declare shortDescription: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
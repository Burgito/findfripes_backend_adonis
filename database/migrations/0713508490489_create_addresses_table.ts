import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'addresses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('line_1', 64).notNullable()
      table.string('line_2', 64).nullable()
      table.string('line_3', 64).nullable()
      table.string('city', 64).notNullable()
      table.string('post_code', 32).notNullable()
      table.string('country', 128).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
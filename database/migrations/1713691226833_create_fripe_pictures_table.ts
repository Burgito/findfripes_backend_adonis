import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'fripe_pictures'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('filename').notNullable()
      table.string('short_description', 256).notNullable()

      table.integer('fripe_id')
        .unsigned()
        .references('fripes.id')
        .onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
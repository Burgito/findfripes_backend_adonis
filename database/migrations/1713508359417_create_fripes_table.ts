import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'fripes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 256).notNullable();
      table.string('short_description', 256).notNullable();
      table.string('long_description', 2048).notNullable();
      table.string('gps_coordinates').nullable();

      table.integer('address_id')
        .notNullable()
        .unsigned()
        .references('addresses.id')
        .onDelete('RESTRICT')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
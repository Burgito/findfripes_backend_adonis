import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('username', 64).notNullable().unique()
      table.string('full_name').nullable()
      table.string('email', 256).notNullable().unique()
      table.string('password').notNullable()

      table.integer('address_id')
        .unsigned()
        .references('addresses.id')
        .onDelete('RESTRICT')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
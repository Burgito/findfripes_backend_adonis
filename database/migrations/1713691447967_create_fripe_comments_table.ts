import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'fripe_comments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('text').notNullable()
      table.integer('user_id')
        .notNullable()
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE')
      table.integer('fripe_id')
        .notNullable()
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
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'fripe_product_categories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('fripe_id').unsigned().references('fripes.id')
      table.integer('product_category_id').unsigned().references('product_categories.id')
      table.unique(['fripe_id', 'product_category_id'])


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
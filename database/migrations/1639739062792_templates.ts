import BaseSchema from '@ioc:Adonis/Lucid/Schema'

//2020_03_05_204758_create_templates_table.php
export default class Templates extends BaseSchema {
  protected tableName = 'templates'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string("name").nullable()
      table.string("title").nullable()
      table.string("data").nullable()
      table.string("type").nullable()
      table.integer("user_id")
        .unsigned()
        .nullable()
        .references("users.id")

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

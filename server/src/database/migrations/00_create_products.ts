import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("category").notNullable();
    table.decimal("price").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("products");
}

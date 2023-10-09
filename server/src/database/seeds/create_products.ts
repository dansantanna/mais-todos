import { Knex } from "knex";
import products from "./products.json";

export async function seed(knex: Knex) {
  await knex("products").insert(products);
}

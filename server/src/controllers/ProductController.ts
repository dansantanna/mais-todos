import { Request, Response } from "express";
import knex from "../database/connection";

export const getAll = async (_: Request, response: Response) => {
  const products = await knex("products").select("products.*");
  return response.json(products);
};

export const getById = async (request: Request, response: Response) => {
  const product = await knex("products").where("id", request.params.id).first();
  return response.json(product);
};

export const create = async (request: Request, response: Response) => {
  const [id] = await knex("products").insert(request.body);
  response.send({ ...request.body, id });
};

export const updateById = async (request: Request, response: Response) => {
  await knex("products").where("id", request.params.id).update(request.body);
  response.send(request.body);
};

export const removeById = async (request: Request, response: Response) => {
  await knex("products").where("id", request.params.id).del();
  return response.status(200).json();
};

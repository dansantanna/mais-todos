import { Request, Response } from "express";
import knex from "../database/connection";

export const getAll = async (_: Request, response: Response) => {
  const products = await knex("products").select("products.*");
  return response.json(products);
};

export const getById = async (request: Request, response: Response) => {
  const product = await knex("products").where("id", request.params.id).first();

  if (!product)
    return response.status(400).json({ message: "Product not found." });

  return response.json(product);
};

export const create = async (request: Request, response: Response) => {
  response.send({});
};

export const updateById = async (request: Request, response: Response) => {
  response.send({});
};

export const removeById = async (request: Request, response: Response) => {
  response.status(200).send();
};

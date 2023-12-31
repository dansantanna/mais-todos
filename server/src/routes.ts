import express, { Request, Response } from "express";
import * as controller from "./controllers/ProductController";

const routes = express.Router();

routes.get("/", (_: Request, response: Response) => {
  response.send({ status: "success", message: "Application running" });
});

// Product endpoints
routes.get("/products", controller.getAll);
routes.get("/products/:id", controller.getById);
routes.post("/products", controller.create);
routes.put("/products/:id", controller.updateById);
routes.delete("/products/:id", controller.removeById);

export default routes;

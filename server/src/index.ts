import express, { Application } from "express";
import routes from "./routes";
import cors from "cors";

const app: Application = express();
const port = process.env.PORT || 3100;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

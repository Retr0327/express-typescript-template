import cors from "cors";
import express from "express";
import { config } from "dotenv";
import routes from "./routes/routes";
import { corsOptions } from "./helper/index";

config();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

export default app;

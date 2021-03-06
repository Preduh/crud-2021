import "reflect-metadata";
import express from "express";

import "./database";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || "3333", () => console.log("Server is running."));

// Preparing point for the server application [Middlewares, Routes, etc.]

import express from "express";
import routes from "./Routes/index.js";

const app = express();

app.use(express.json());

app.use("/api", routes);

export default app;
// Preparing point for the server application [Middlewares, Routes, etc.]

import express, { type Request, type Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "✅ Express + TypeScript + ESM working fine!" });
});

export default app;
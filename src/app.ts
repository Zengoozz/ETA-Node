// Preparing point for the server application [Middlewares, Routes, etc.]

import express from "express";
import invoiceRoutes from "./Routes/InvoiceRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/invoices", invoiceRoutes);

export default app;
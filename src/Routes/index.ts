import { Router } from "express";
// Need attention: Adjust the import paths according to your project structure ts not js
import invoiceRoutes from "./InvoiceRoutes.js";


const router = Router();

router.use("/invoices", invoiceRoutes);

export default router;
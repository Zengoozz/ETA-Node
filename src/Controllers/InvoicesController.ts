import { type Request, type Response } from "express";
import type ProviderInvoiceModel from "../Models/Provider/ProviderInvoiceModel.ts";

interface InvoiceSearchParams {
   startDate?: string;
   endDate?: string;
}

export const getProviderInvoices = (
   req: Request<{}, {}, {}, InvoiceSearchParams>,
   res: Response
): void => {
   const { startDate, endDate } = req.query;
   if (!startDate || !endDate) {
      res.status(400).json({ error: "Both startDate and endDate are required." });
      return;
   }

   const parsedStart = new Date(startDate);
   const parsedEnd = new Date(endDate);

   if (isNaN(parsedStart.getTime()) || isNaN(parsedEnd.getTime())) {
      res.status(400).json({
         error: "Invalid date format. Use ISO format: YYYY-MM-DDTHH:mm:ssZ",
      });
      return;
   }

   res.json({
      message: "Invoices retrieved successfully",
      startDate: parsedStart.toISOString(),
      endDate: parsedEnd.toISOString(),
      results: [],
   });
};

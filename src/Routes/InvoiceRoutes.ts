import { Router } from 'express';
import { getProviderInvoices } from '../Controllers/InvoicesController.js';


const router = Router();

router.get('/provider-invoices', getProviderInvoices);

export default router;
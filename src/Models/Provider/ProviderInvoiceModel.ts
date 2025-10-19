import { defaultReceiverAddressModel, type InvoiceLineModel, type ReceiverAddressModel } from "../Consumer/InvoiceDetail.js";

export default interface ProviderInvoiceModel {
   invoiceId: string;
   invoiceType: string;
   invoiceNumber: string;
   registrationNumber: string;
   createdDate: Date;
   receiverAddress: ReceiverAddressModel;
   receiverName: string;
   receiverId: number;
   isReviewed: boolean;
   vatNet: number;
   netPrice: number;
   invoiceItems: InvoiceLineModel[];
}

export const defaultProviderInvoiceViewModel: ProviderInvoiceModel = {
  invoiceId: "",
  invoiceType: "",
  invoiceNumber: "",
  registrationNumber: "",
  createdDate: new Date(),
  receiverAddress: { ...defaultReceiverAddressModel },
  receiverName: "",
  receiverId: 0,
  isReviewed: false,
  vatNet: 0,
  netPrice: 0,
  invoiceItems: [],
};

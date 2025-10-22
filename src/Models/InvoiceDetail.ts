export interface ReceiverAddressModel {
   country?: string;
   governate?: string;
   regionCity?: string;
   street?: string;
   buildingNumber?: string;
   postalCode?: string;
   floor?: string;
   room?: string;
   landmark?: string;
   additionalInformation?: string;
}

export const defaultReceiverAddressModel: ReceiverAddressModel = {
  country: "",
  governate: "",
  regionCity: "",
  street: "",
  buildingNumber: "",
  postalCode: "",
  floor: "",
  room: "",
  landmark: "",
  additionalInformation: "",
};

export const defaultValueModel: ValueModel = {
  currencySold: "",
  amountEGP: 0,
  amountSold: 0,
  currencyExchangeRate: 0,
};


export interface ValueModel {
  currencySold: string; // ISO 4217 code (e.g., "EGP")
  amountEGP: number;
  amountSold: number;
  currencyExchangeRate: number;
}

export interface DiscountModel {
  rate: number; // Percentage (0 to 100)
  amount: number;
}

export const defaultDiscountModel: DiscountModel = {
  rate: 0,
  amount: 0,
};

export interface TaxableItemModel {
  taxType: string;  // e.g., "T1"
  amount: number;   // tax amount
  subType: string;  // e.g., "V001"
  rate: number;     // tax rate (0–999)
}

export const defaultTaxableItemModel: TaxableItemModel = {
  taxType: "T1",
  amount: 0,
  subType: "V001",
  rate: 0,
};

export interface InvoiceLineModel {
  description: string;
  itemType: string;  // "GS1" or "EGS"
  itemCode: string;
  unitType: string;  // e.g., "kg"
  quantity: number;
  unitValue: ValueModel;
  salesTotal: number;
  total: number;
  valueDifference: number;
  totalTaxableFees: number;
  netTotal: number;
  itemsDiscount: number;
  discount: DiscountModel;
  taxableItems: TaxableItemModel[];
  internalCode: string;
}

export const defaultInvoiceLineModel: InvoiceLineModel = {
  description: "",
  itemType: "",
  itemCode: "",
  unitType: "",
  quantity: 0,
  unitValue: { ...defaultValueModel },
  salesTotal: 0,
  total: 0,
  valueDifference: 0,
  totalTaxableFees: 0,
  netTotal: 0,
  itemsDiscount: 0,
  discount: { ...defaultDiscountModel },
  taxableItems: [],
  internalCode: "",
};

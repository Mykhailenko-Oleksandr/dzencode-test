export interface Product {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: Guarantee;
  price: Price[];
  order: number;
  date: string;
}

export interface ExtendedProduct extends Product {
  orderTitle: string;
}

interface Price {
  value: number;
  symbol: string;
  isDefault: number;
}

interface Guarantee {
  start: string;
  end: string;
}

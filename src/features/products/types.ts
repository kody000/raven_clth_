import { ProductType, FilterOrder } from "./constants";

export interface ProductFilters {
  selectedType?: ProductType;
  selectedOrder: FilterOrder;
}

export interface Product {
  id: number;
  name: string;
  type: ProductType;
  createdAt: string;
  color: string;
  price: number;
  description: string;
  sizes: {
    s: boolean;
    m: boolean;
    l: boolean;
    xl: boolean;
  };
}

export interface CartItem {
  id: number;
  name: string;
  type: ProductType;
  color: string;
  price: number;
  sizes: {
    s: boolean;
    m: boolean;
    l: boolean;
    xl: boolean;
  };
  size: "s" | "m" | "l" | "xl";
  quantity: number;
}

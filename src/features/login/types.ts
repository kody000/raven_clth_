export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order {
  id: number;
  date: string;
  status: string;
  total: number;
}

export interface Account {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  addresses: Address[];
  orders: Order[];
  token: string | null;
}

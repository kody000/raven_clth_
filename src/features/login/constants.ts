import { Address, Account, Order } from "./types";

const orders: Order[] = [
  { id: 1, date: "2023-11-29", status: "Processing", total: 50.0 },
  { id: 2, date: "2023-11-28", status: "Shipped", total: 75.0 },
  { id: 3, date: "2023-11-27", status: "Delivered", total: 120.0 },
  { id: 4, date: "2023-11-26", status: "Pending", total: 90.0 },
];

const address1: Address = {
  street: "123 Main Street",
  city: "Cityville",
  state: "Stateville",
  zipCode: "12345",
  country: "Countryland",
};

const address2: Address = {
  street: "456 Elm Street",
  city: "Townsville",
  state: "Stateland",
  zipCode: "54321",
  country: "Countryville",
};

const account1: Account = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  password: "password123",
  addresses: [address1],
  orders: orders,
  token: "token123",
};

const account2: Account = {
  firstName: "Jane",
  lastName: "Smith",
  email: "jane.smith@example.com",
  password: "securepassword456",
  addresses: [address2],
  orders: orders,
  token: "token456",
};

export const accounts = [account1, account2];

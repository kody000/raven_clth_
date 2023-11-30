import { Product } from "./types";

export enum ProductType {
  T_SHIRT = "t-shirt",
  HOODIE = "hoodie",
}

export enum FilterOrder {
  LATEST = "createdAtDESC",
  OLDEST = "createdAtASC",
  HIGHEST = "priceDESC",
  LOWEST = "priceASC",
}

const mockedProducts: Product[] = [
  {
    id: 1,
    name: "Amaterasu Elegance",
    type: ProductType.T_SHIRT,
    createdAt: "2023-01-01",
    color: "Red",
    price: 34.99,
    description: "Embrace the elegance of Amaterasu with this stylish top.",
    sizes: { s: true, m: true, l: true, xl: true },
  },
  {
    id: 2,
    name: "Tsuki Shadow",
    type: ProductType.HOODIE,
    createdAt: "2023-02-15",
    color: "Black",
    price: 59.99,
    description: "Step into the shadows with the Tsuki Shadow garment.",
    sizes: { s: true, m: true, l: true, xl: true },
  },
  {
    id: 3,
    name: "Sakura Blossom",
    type: ProductType.T_SHIRT,
    createdAt: "2023-03-10",
    color: "Red",
    price: 44.99,
    description:
      "Capture the beauty of cherry blossoms with this Sakura-themed top.",
    sizes: { s: true, m: true, l: true, xl: true },
  },
  {
    id: 4,
    name: "Onyx Phantom",
    type: ProductType.HOODIE,
    createdAt: "2023-04-05",
    color: "Black",
    price: 69.99,
    description: "Unleash the mystery with the Onyx Phantom garment.",
    sizes: { s: true, m: true, l: true, xl: true },
  },
  {
    id: 5,
    name: "Dragon Spirit",
    type: ProductType.T_SHIRT,
    createdAt: "2023-05-20",
    color: "Blue",
    price: 49.99,
    description: "Awaken the dragon within with this Dragon Spirit-themed top.",
    sizes: { s: true, m: true, l: true, xl: true },
  },
  {
    id: 6,
    name: "Kitsune Enchantment",
    type: ProductType.T_SHIRT,
    createdAt: "2023-06-15",
    color: "Orange",
    price: 39.99,
    description:
      "Channel the enchanting power of the Kitsune with this stylish top.",
    sizes: { s: true, m: true, l: true, xl: true },
  },
  {
    id: 7,
    name: "Moonlit Sakura",
    type: ProductType.HOODIE,
    createdAt: "2023-07-01",
    color: "White",
    price: 64.99,
    description:
      "Experience the magic of moonlit cherry blossoms with this hoodie.",
    sizes: { s: true, m: true, l: true, xl: true },
  },
  {
    id: 8,
    name: "Shinobi Shadow",
    type: ProductType.T_SHIRT,
    createdAt: "2023-08-10",
    color: "Black",
    price: 42.99,
    description: "Become one with the shadows in this Shinobi-themed top.",
    sizes: { s: true, m: true, l: true, xl: true },
  },
  {
    id: 9,
    name: "Celestial Dragon",
    type: ProductType.HOODIE,
    createdAt: "2023-09-05",
    color: "Blue",
    price: 74.99,
    description: "Harness the celestial power of the dragon with this hoodie.",
    sizes: { s: true, m: true, l: true, xl: true },
  },
  {
    id: 10,
    name: "Zen Garden Serenity",
    type: ProductType.T_SHIRT,
    createdAt: "2023-10-20",
    color: "Green",
    price: 47.99,
    description: "Find serenity in a Zen garden with this stylish top.",
    sizes: { s: true, m: true, l: true, xl: true },
  },
  {
    id: 11,
    name: "Cherry Blossom Breeze",
    type: ProductType.HOODIE,
    createdAt: "2023-11-15",
    color: "Pink",
    price: 67.99,
    description: "Feel the breeze of cherry blossoms in this cozy hoodie.",
    sizes: { s: true, m: true, l: true, xl: true },
  },
];

export { mockedProducts };

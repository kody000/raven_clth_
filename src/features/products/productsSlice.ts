import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterOrder, mockedProducts } from "./constants";
import { ProductFilters, Product, CartItem } from "./types";

interface ProductsState {
  productList: Product[];
  filters: ProductFilters;
  cart: CartItem[];
}

const initialState: ProductsState = {
  productList: mockedProducts,
  filters: {
    selectedOrder: FilterOrder.LATEST,
  },
  cart: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<Product[]>) => {
      state.productList = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<ProductFilters>>) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; size: "s" | "m" | "l" | "xl" }>
    ) => {
      const { product, size } = action.payload;
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.name === product.name && item.size === size
      );

      if (existingCartItemIndex !== -1) {
        // If the item already exists in the cart, increase the quantity
        state.cart[existingCartItemIndex].quantity += 1;
      } else {
        // If the item is not in the cart, add it with quantity 1 and selected size
        state.cart.push({ ...product, size, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.name !== action.payload);
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ name: string; quantity: number }>
    ) => {
      const { name, quantity } = action.payload;
      const cartItemIndex = state.cart.findIndex((item) => item.name === name);

      if (cartItemIndex !== -1) {
        // Update the quantity if the item is found in the cart
        state.cart[cartItemIndex].quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setProductList, setFilters } = productsSlice.actions;
export default productsSlice.reducer;

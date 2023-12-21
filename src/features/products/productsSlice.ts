import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterOrder, mockedProducts, ProductSizes } from "./constants";
import { ProductFilters, Product, CartItem } from "./types";

interface ProductsState {
  productList: Product[];
  filters: ProductFilters;
  cart: CartItem[];
  availableDiscounts: Record<string, number>;
  activeDiscount?: string;
}

const initialState: ProductsState = {
  productList: mockedProducts,
  filters: {
    selectedOrder: FilterOrder.LATEST,
  },
  cart: [],
  availableDiscounts: {
    DISCOUNT10: 0.1, // -10%
    DISCOUNT20: 0.2, // -20%
  },
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
      action: PayloadAction<{
        product: Product;
        size: ProductSizes;
        quantity: number;
      }>
    ) => {
      const { product, size, quantity } = action.payload;
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.name === product.name && item.size === size
      );

      if (existingCartItemIndex !== -1) {
        state.cart[existingCartItemIndex].quantity += quantity;
      } else {
        state.cart.push({ ...product, size, quantity });
      }
    },
    clearFilters: (state) => {
      state.filters = {
        selectedOrder: FilterOrder.LATEST,
      };
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
        state.cart[cartItemIndex].quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    setActiveDiscount: (state, action: PayloadAction<string>) => {
      const discountCode = action.payload;
      if (
        Object.prototype.hasOwnProperty.call(
          state.availableDiscounts,
          discountCode
        )
      ) {
        state.activeDiscount = discountCode;
      }
    },

    clearActiveDiscount: (state) => {
      state.activeDiscount = undefined;
    },
    increaseCartItemQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const cartItemIndex = state.cart.findIndex(
        (item) => item.id === productId
      );

      if (cartItemIndex !== -1) {
        state.cart[cartItemIndex].quantity += 1;
      }
    },

    decreaseCartItemQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const cartItemIndex = state.cart.findIndex(
        (item) => item.id === productId
      );

      if (cartItemIndex !== -1) {
        state.cart[cartItemIndex].quantity = Math.max(
          state.cart[cartItemIndex].quantity - 1,
          0
        );

        if (state.cart[cartItemIndex].quantity === 0) {
          state.cart = state.cart.filter((item) => item.id !== productId);
        }
      }
    },

    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
  },
});

export const {
  setProductList,
  setFilters,
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
  setActiveDiscount,
  clearActiveDiscount,
  clearFilters,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  removeItemFromCart,
} = productsSlice.actions;
export default productsSlice.reducer;

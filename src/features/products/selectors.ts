// src/features/counter/counterSlice.ts
import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";
import { FilterOrder } from "./constants";
import { Product, ProductFilters, CartItem } from "./types";

// Select the entire products state
export const selectProductsState = (state: RootState) => state.products;

// Select the product list from the products state
export const selectProductList = (state: RootState): Product[] =>
  selectProductsState(state).productList;

export const selectProductById = (productId: string) =>
  createSelector([selectProductList], (productList) =>
    productList.find((product) => product.id === +productId)
  );

// Select the filters from the products state
export const selectFilters = (state: RootState): ProductFilters =>
  selectProductsState(state).filters;

// Select the selected order from the filters
export const selectSelectedOrder = (state: RootState): FilterOrder =>
  selectFilters(state).selectedOrder;

export const selectFilteredProducts = createSelector(
  [selectProductList, selectFilters],
  (productList, filters) => {
    const { selectedOrder, selectedType } = filters;

    // Apply order filtering
    let filteredProducts = [...productList];
    switch (selectedOrder) {
      case FilterOrder.LATEST:
        // Sort by createdAt in descending order
        filteredProducts.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case FilterOrder.OLDEST:
        // Sort by createdAt in ascending order
        filteredProducts.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      case FilterOrder.HIGHEST:
        // Sort by price in descending order
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case FilterOrder.LOWEST:
        // Sort by price in ascending order
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    // Apply type filtering
    if (selectedType) {
      filteredProducts = filteredProducts.filter(
        (product) => product.type === selectedType
      );
    }

    return filteredProducts;
  }
);

export const selectCart = (state: RootState): CartItem[] =>
  selectProductsState(state).cart;

// Selector for the total number of items in the cart
export const selectTotalItemsInCart = createSelector([selectCart], (cart) =>
  cart.reduce((total, item) => total + item.quantity, 0)
);

// Selector to get the products slice from the state
const selectProducts = (state: RootState) => state.products;

// Selector to get the active discount from the state
export const selectActiveDiscount = (state: RootState) =>
  selectProducts(state).activeDiscount;

// Selector to get the cart items from the state
export const selectCartItems = (state: RootState) => selectProducts(state).cart;

export const selectTotalPriceWithoutDiscount = createSelector(
  [selectCartItems],
  (cartItems) => {
    const totalPriceWithoutDiscount = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const formattedTotalPrice = totalPriceWithoutDiscount.toFixed(2);

    return formattedTotalPrice;
  }
);

export const getActiveDiscount = (state: RootState) =>
  state.products.activeDiscount;

export const getActiveDiscountValue = (state: RootState) => {
  const activeDiscount = state.products.activeDiscount;
  const availableDiscounts = state.products.availableDiscounts;

  if (activeDiscount && availableDiscounts[activeDiscount] !== undefined) {
    return availableDiscounts[activeDiscount];
  }

  // Default to 0 if there is no active discount or if the active discount is invalid
  return 0;
};

const getAvailableDiscounts = (state: RootState) =>
  state.products.availableDiscounts;

export const getActiveDiscountPercentage = createSelector(
  [getActiveDiscount, getAvailableDiscounts],
  (activeDiscount, availableDiscounts) => {
    if (activeDiscount && availableDiscounts[activeDiscount] !== undefined) {
      // If there is an active discount and it exists in availableDiscounts
      const discountValue = availableDiscounts[activeDiscount];
      // Convert discount value to percentage
      const percentage = discountValue * 100;
      return percentage;
    }
    // Default to 0 if there is no active discount or if the active discount is invalid
    return 0;
  }
);

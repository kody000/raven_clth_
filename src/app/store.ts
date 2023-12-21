// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import loginSlice from "../features/login/loginSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    login: loginSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

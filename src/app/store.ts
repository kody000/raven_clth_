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
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

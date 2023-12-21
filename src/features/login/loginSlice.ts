// loginSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account } from "./types";
import { generateToken } from "../../utils/utils";
import { accounts } from "./constants";

interface LoginState {
  isLoginDialogOpen: boolean;
  isRegisterDialogOpen: boolean;
  accounts: Account[];
  loggedInToken: string | null;
}

const initialState: LoginState = {
  isLoginDialogOpen: false,
  isRegisterDialogOpen: false,
  accounts: accounts,
  loggedInToken: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    openLoginDialog: (state) => {
      state.isLoginDialogOpen = true;
    },
    closeLoginDialog: (state) => {
      state.isLoginDialogOpen = false;
    },
    openRegisterDialog: (state) => {
      state.isRegisterDialogOpen = true;
    },
    closeRegisterDialog: (state) => {
      state.isRegisterDialogOpen = false;
    },
    addAccount: (state, action: PayloadAction<Account>) => {
      state.accounts.push(action.payload);
    },
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const { email, password } = action.payload;
      const loggedInUser = state.accounts.find(
        (account) => account.email === email && account.password === password
      );

      if (loggedInUser) {
        state.loggedInToken = loggedInUser.token || null;
        state.isLoginDialogOpen = false;

        if (state.loggedInToken) {
          localStorage.setItem("loggedInToken", state.loggedInToken);
        }
      }
    },
    register: (state, action: PayloadAction<Account>) => {
      const newAccount = action.payload;

      newAccount.token = generateToken();

      state.accounts.push(newAccount);
      state.isRegisterDialogOpen = false;
      state.loggedInToken = newAccount.token;
    },
    logoff: (state) => {
      console.log("hi");
      state.loggedInToken = null;

      localStorage.removeItem("loggedInToken");
    },
  },
});

export const {
  openLoginDialog,
  closeLoginDialog,
  openRegisterDialog,
  closeRegisterDialog,
  addAccount,
  login,
  register,
  logoff,
} = loginSlice.actions;

export default loginSlice.reducer;

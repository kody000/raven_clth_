// loginSlice.ts (continued)
import { createSelector } from "reselect";
import { RootState } from "../../app/store";

// Select the login slice from the root state
const selectLogin = (state: RootState) => state.login;

// Basic selectors
export const selectIsLoginDialogOpen = createSelector(
  [selectLogin],
  (login) => login.isLoginDialogOpen
);

export const selectIsRegisterDialogOpen = createSelector(
  [selectLogin],
  (login) => login.isRegisterDialogOpen
);

export const selectAccounts = createSelector(
  [selectLogin],
  (login) => login.accounts
);

export const selectLoggedInUser = createSelector([selectLogin], (login) => {
  // Add your logic to determine the logged-in user based on the token
  const loggedInUser = login.accounts.find((account) => account.token !== null);
  return loggedInUser || null; // Return null if no user is logged in
});

export const selectUserOrders = createSelector(
  [selectLoggedInUser],
  (loggedInUser) => loggedInUser?.orders || []
);

export const selectUserAddresses = createSelector(
  [selectLoggedInUser],
  (loggedInUser) => loggedInUser?.addresses || []
);

export const selectTotalOrders = createSelector([selectAccounts], (accounts) =>
  accounts.reduce((total, account) => total + account.orders.length, 0)
);

export const selectTotalUsers = createSelector(
  [selectAccounts],
  (accounts) => accounts.length
);

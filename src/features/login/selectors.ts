import { createSelector } from "reselect";
import { RootState } from "../../app/store";

const selectLogin = (state: RootState) => state.login;

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
  const loggedInToken = localStorage.getItem("loggedInToken");

  if (loggedInToken) {
    const loggedInUser = login.accounts.find(
      (account) => account.token === loggedInToken
    );
    return loggedInUser || null;
  }

  return null;
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

import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./views/Home/Home";
import Faq from "./views/FAQ/Faq";
import New from "./views/New/New";
import Stock from "./views/Stock/Stock";
import Cart from "./views/Cart/Cart";
import Profile from "./views/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import LoginDialog from "./components/LoginDialog/LoginDialog";
import {
  selectIsLoginDialogOpen,
  selectIsRegisterDialogOpen,
} from "./features/login/selectors";
import RegisterDialog from "./components/RegisterDialog/RegisterDialog";
import Product from "./views/Product/Product";

function App() {
  const isLoginDialogOpen = useSelector(selectIsLoginDialogOpen);
  const isRegisterDialogOpen = useSelector(selectIsRegisterDialogOpen);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <LoginDialog open={isLoginDialogOpen} />
      <RegisterDialog open={isRegisterDialogOpen} />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/faq" Component={Faq} />
        <Route path="/new" Component={New} />
        <Route path="/stock" Component={Stock} />
        <Route path="/profile" Component={Profile} />
        <Route path="/product/:productId" Component={Product} />
        <Route path="/test2" Component={Profile} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

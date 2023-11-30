import { useState } from "react";
import { useDispatch } from "react-redux";
import { Backdrop, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./LoginDialog.styles";
import {
  closeLoginDialog,
  openRegisterDialog,
  login,
} from "../../features/login/loginSlice";

interface LoginDialogProps {
  open: boolean;
}

const LoginDialog = ({ open }: LoginDialogProps) => {
  const [inputsState, setInputsState] = useState({ email: "", password: "" });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleCloseDialog = () => {
    dispatch(closeLoginDialog());
  };

  const handleSwitchToRegisterDialog = () => {
    dispatch(closeLoginDialog());
    dispatch(openRegisterDialog());
  };

  const handleOnChange = (value: string, field: string) => {
    setInputsState((prevInputsState) => ({
      ...prevInputsState,
      [field]: value,
    }));
  };

  const handleLogin = () => {
    const { email, password } = inputsState;
    dispatch(login({ email, password }));
  };
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <div className={classes.container}>
        <IconButton
          disableRipple
          className={classes.closeDialogButton}
          onClick={handleCloseDialog}
        >
          <CloseIcon />
        </IconButton>
        <div className={classes.logoContainer}>
          <div className={classes.loginText}>Login</div>
        </div>
        <div className={classes.inputsContainer}>
          <div className={classes.inputContainer}>
            <div className={classes.inputLabel}>Email</div>
            <input
              className={classes.input}
              onChange={(event) => handleOnChange(event.target.value, "email")}
            />
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.inputLabel}>Password</div>
            <input
              type={"password"}
              className={classes.input}
              onChange={(event) =>
                handleOnChange(event.target.value, "password")
              }
            />
          </div>
          <div className={classes.additionalActionsContainer}>
            <div className={classes.resetPassword}>Forgot your password?</div>
            <div
              className={classes.createAccount}
              onClick={handleSwitchToRegisterDialog}
            >
              Create your account
            </div>
          </div>
        </div>
        <div className={classes.logInButton} onClick={handleLogin}>
          LOG IN
        </div>
      </div>
    </Backdrop>
  );
};

export default LoginDialog;

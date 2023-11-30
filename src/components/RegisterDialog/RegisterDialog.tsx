import { useDispatch } from "react-redux";
import { Backdrop, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./RegisterDialog.styles";
import {
  closeRegisterDialog,
  openLoginDialog,
} from "../../features/login/loginSlice";

interface RegisterDialogProps {
  open: boolean;
}

const RegisterDialog = ({ open }: RegisterDialogProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleCloseDialog = () => {
    dispatch(closeRegisterDialog());
  };

  const handleSwitchToLoginDialog = () => {
    dispatch(closeRegisterDialog());
    dispatch(openLoginDialog());
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
          <div className={classes.loginText}>Register</div>
        </div>
        <div className={classes.inputsContainer}>
          <div className={classes.inputContainer}>
            <div className={classes.inputLabel}>First name</div>
            <input className={classes.input} />
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.inputLabel}>Last name</div>
            <input className={classes.input} />
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.inputLabel}>Email</div>
            <input className={classes.input} />
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.inputLabel}>Password</div>
            <input type={"password"} className={classes.input} />
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.inputLabel}>Confirm password</div>
            <input type={"password"} className={classes.input} />
          </div>
          <div className={classes.additionalActionsContainer}>
            <div className={classes.logInText}>Already have an account?</div>
            <div
              className={classes.logInTextButton}
              onClick={handleSwitchToLoginDialog}
            >
              Log in
            </div>
          </div>
        </div>
        <div className={classes.logInButton}>SIGN UP</div>
      </div>
    </Backdrop>
  );
};

export default RegisterDialog;

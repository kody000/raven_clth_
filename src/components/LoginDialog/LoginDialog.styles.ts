import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  backdrop: {
    zIndex: 100,
  },
  container: {
    width: "600px",
    display: "flex",
    flexDirection: "column",
    background: theme.palette.background.default,
    padding: "40px",
    position: "relative",
  },
  closeDialogButton: {
    color: theme.palette.secondary.main,
    position: "absolute",
    right: 20,
    top: 20,
    "& .MuiSvgIcon-root": {
      width: "50px",
      height: "50px",
    },
    "&:focus": {
      outline: "none",
    },
  },
  logoContainer: {
    padding: "0 25px",
    alignSelf: "flex-start",
    background: theme.palette.secondary.main,
    marginBottom: "40px",
  },
  loginText: {
    color: theme.palette.background.default,
    fontSize: "64px",
    fontWeight: 700,
    lineHeight: "normal",
  },
  inputsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "0 75px",
    marginBottom: "50px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "8px",
  },
  inputLabel: {
    color: theme.palette.primary.light,
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "normal",
  },
  input: {
    background: theme.palette.primary.light,
    height: "40px",
    width: "100%",
    padding: "0 10px",
    color: theme.palette.background.default,
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "Inter",
  },
  additionalActionsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  resetPassword: {
    color: theme.palette.primary.light,
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "normal",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  createAccount: {
    color: theme.palette.primary.light,
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "normal",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  logInButton: {
    alignSelf: "center",
    background: theme.palette.secondary.main,
    padding: "0 54px",
    color: theme.palette.background.default,
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "normal",
    cursor: "pointer",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: theme.palette.background.default,
      boxShadow: `inset 0 0 0 5px ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
    },
  },
}));

export default useStyles;

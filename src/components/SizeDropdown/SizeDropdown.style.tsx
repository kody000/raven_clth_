import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  sizeDropdownContainer: {
    position: "relative",
  },
  sizeDropdown: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 15px",
    gap: "15px",
    position: "absolute",
    background: theme.palette.background.default,
    opacity: 0.9,
    top: "50px",
    right: "11px",
  },
  sizeDropdownOptions: {
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "normal",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  optionsButtonContainer: {
    textTransform: "capitalize",
    width: "40px",
    display: "flex",
    gap: "25px",
    justifyContent: "space-evenly",
    alignItems: "center",
    background: theme.palette.background.default,
    border: "4px solid #4B3435",
    padding: "3px 10px",
    color: theme.palette.primary.main,
    fontSize: "20px",
    fontWeight: 600,
    cursor: "pointer",
    position: "relative",
    "& span": {
      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },
  },
}));

export default useStyles;

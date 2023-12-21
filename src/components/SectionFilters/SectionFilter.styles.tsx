import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
  },
  filterButtonContainer: {
    position: "relative",
  },
  filterButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "30px",
    background: theme.palette.background.default,
    border: "4px solid #4B3435",
    padding: "3px 10px",
    borderRadius: 0,
    lineHeight: "normal",
    color: theme.palette.primary.main,
    cursor: "pointer",
    "&:hover": {
      borderColor: theme.palette.secondary.main,
      color: theme.palette.secondary.main,
    },
  },
  activeFilter: {
    borderColor: theme.palette.secondary.main,
    color: `${theme.palette.secondary.main} !important`,
  },
  filtersDropdownContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "15px 20px",
    opacity: 0.9,
    background: theme.palette.background.default,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    position: "absolute",
    top: "45px",
    right: "-40px",
  },
  filtersDropdownOptions: {
    color: theme.palette.primary.main,
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "normal",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

export default useStyles;

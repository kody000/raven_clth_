import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    gap: "25px",
    justifyContent: "space-between",
    alignItems: "center",
    background: theme.palette.background.default,
    border: "4px solid #4B3435",
    padding: "3px 10px",
    color: theme.palette.primary.main,
    fontSize: "20px",
    fontWeight: 600,
    cursor: "pointer",
    position: "relative",
    width: "101px",
    "& span": {
      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },
  },
  descriptionContainer: {
    background: theme.palette.background.default,
    maxWidth: "180px",
    padding: "10px 20px",
    marginBottom: "40px",
  },
  descriptionText: {
    color: theme.palette.primary.main,
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "normal",
  },
  descriptionPrice: {
    color: theme.palette.secondary.main,
    fontSize: "32px",
    fontWeight: 600,
    lineHeight: "normal",
  },
}));

export default useStyles;

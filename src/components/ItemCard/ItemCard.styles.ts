import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center",
    width: 290,
    height: 380,
    border: `5px solid #4B3435`,
    background: "#F1FFF3",
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

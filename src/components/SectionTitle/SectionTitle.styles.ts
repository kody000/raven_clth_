import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: "25px 45px",
    color: theme.palette.secondary.main,
    textTransform: "uppercase",
    border: "5px solid #4B3435",
    opacity: 0.9,
    background: theme.palette.background.default,
    "& .MuiTypography-root": {
      fontWeight: 700,
      fontSize: "64px",
      lineHeight: "normal",
    },
  },
}));

export default useStyles;

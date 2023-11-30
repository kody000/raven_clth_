import { makeStyles, Theme } from "@material-ui/core/styles";
import homeBackground from "../../img/homeBackground.svg";

const useStyles = makeStyles((theme: Theme) => ({
  homeContainer: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    backgroundImage: `url(${homeBackground})`,
    position: "relative",
  },
  heroTextContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "45px",
    padding: "30px 40px 45px 40px",
    maxWidth: "620px",
    position: "absolute",
    backgroundColor: theme.palette.background.default,
    opacity: 0.9,
    left: "45px",
    bottom: "165px",
  },
  heroText: {
    fontSize: "96px",
    textAlign: "left",
    color: theme.palette.primary.main,
    "&.MuiTypography-root": {
      fontWeight: 500,
      fontSize: "96px",
      lineHeight: "normal",
    },
  },
  heroTextDecorator: {
    color: theme.palette.secondary.main,
  },
  heroButton: {
    padding: "8px 16px",
    background: theme.palette.secondary.main,
    fontSize: "36px",
    color: "#F1FFF3",
    fontWeight: 600,
    lineHeight: "normal",
    textTransform: "uppercase",
    cursor: "pointer",
    boxSizing: "border-box",
    transition: "background 0.1s, box-shadow 0.3s",
    "&:hover": {
      backgroundColor: theme.palette.background.default,
      boxShadow: `inset 0 0 0 5px ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
    },
  },
}));

export default useStyles;

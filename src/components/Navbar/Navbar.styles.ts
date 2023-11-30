import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    "&.MuiPaper-root": {
      background: "none",
      boxShadow: "none",
    },
    possition: "relative",
  },
  navigationContainer: {
    height: "75px",
    opacity: 0.9,
    background: theme.palette.background.default,
    boxShadow: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    possition: "relative",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoTextContainer: {
    fontFamily: theme.typography.fontFamily,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  logoText: {
    fontWeight: 500,
    "&.MuiTypography-root": {
      fontSize: "20px",
    },
    color: theme.palette.primary.main,
  },
  nextDropTimer: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
  nextDropTitle: {
    fontWeight: 500,
    lineHeight: "normal",
    color: theme.palette.primary.main,
    "&.MuiTypography-root": {
      fontSize: "24px",
    },
  },
  timer: {
    fontWeight: 700,
    lineHeight: "normal",
    color: theme.palette.secondary.main,
    "&.MuiTypography-root": {
      fontSize: "24px",
    },
  },
  navActionsContainer: {
    display: "flex",
    gap: "25px",
    marginRight: "25px",
  },
  navAction: {
    "& svg": {
      fill: theme.palette.primary.main,
      width: "30px",
      height: "30px",
    },
  },
  drawerContainer: {
    borderTop: `1px solid ${theme.palette.primary.main}`,
    display: "flex",
    flexDirection: "column",
    gap: "45px",
    background: theme.palette.background.default,
    opacity: 0.9,
    paddingTop: "45px",
    position: "fixed",
    width: "300px",
    top: "75px",
    right: 0,
    animation: "$fadeInFromRight 0.5s ease-out",
    zIndex: 1,
  },
  "@keyframes fadeInFromRight": {
    "0%": {
      opacity: 0,
      transform: "translateX(20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  drawerAction: {
    fontWeight: 500,
    lineHeight: "normal",
    "&.MuiTypography-root": {
      fontSize: "40px",
      fontWeight: 500,
      "&:hover": {
        color: theme.palette.secondary.main,
        cursor: "pointer",
      },
    },
    color: theme.palette.primary.main,
  },
  drawerSocialActionsContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 54px",
    borderTop: `1px solid ${theme.palette.primary.main}`,
  },
  divider: {
    width: "1px",
    backgroundColor: theme.palette.primary.main,
  },
}));

export default useStyles;

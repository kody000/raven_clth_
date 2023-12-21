import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    margin: "auto 0 20px 0",
  },
  divider: {
    height: "1px",
    borderBottom: `2px solid ${theme.palette.background.default}`,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "24px",
    color: theme.palette.background.default,
    fontWeight: 700,
    lineHeight: "normal",
    textAlign: "left",
    maxWidth: "328px",
  },
  shipmentPrice: {
    marginLeft: "20px",
    fontSize: "32px",
  },
  checkMark: {
    minWidth: "32px",
    height: "28px",
    marginRight: "20px",
    border: `3px solid ${theme.palette.background.default}`,
    boxSizing: "border-box",
    backgroundColor: theme.palette.primary.light,
  },
  checkMarkActive: {
    backgroundColor: theme.palette.background.default,
  },
}));

export default useStyles;

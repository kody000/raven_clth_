import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  orderBody: {
    padding: "20px 25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    background: theme.palette.primary.light,
    borderTop: "5px solid black",
    borderBottom: "5px solid black",
    borderRight: "5px solid black",
  },
  orderIdBody: {
    borderLeft: "5px solid black",
  },
  ordersHeaderContainer: {
    display: "flex",
  },
}));

export default useStyles;

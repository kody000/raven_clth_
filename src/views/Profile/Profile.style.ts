import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  sectionContainer: {
    padding: "45px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "60px",
  },
  generalContainer: {
    display: "flex",
    gap: "180px",
    justifyContent: "center",
  },
  ordersContainer: {
    display: "grid",
    gridTemplateColumns: "200px 250px 230px 200px",
    gridTemplateRows: "70px  70px 70px 70px",
    justifyContent: "center",
    alignContent: "center",
    color: "black",
    fontSize: "24px",
    fontWeight: 700,
    rowGap: "25px",
    lineHeight: "normal",
  },
  orderHeaderContainer: {
    color: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    fontSize: "36px",
  },
  orderHeader: {
    padding: "3px 25px",
    background: theme.palette.background.default,
  },
  addressDetailsTitle: {
    padding: "15px 30px",
    background: theme.palette.background.default,
    fontSize: "48px",
    fontWeight: 600,
    lineHeight: "normal",
    color: theme.palette.primary.light,
    position: "absolute",
    zIndex: 10,
    left: "-30px",
    top: "-25px",
  },
  addressContainer: {
    padding: "85px 45px 40px 45px",
    border: "5px solid #4B3435",
    opacity: 0.9,
    background: theme.palette.primary.light,
    position: "relative",
    maxWidth: "430px",
    width: "100%",
  },
  addressContent: {
    color: "black",
    fontSize: "36px",
    fontWeight: 600,
    lineHeight: "normal",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "25px",
  },
  name: {
    marginBottom: "25px",
  },
  address: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "7px",
  },
  countryRow: {
    marginTop: "7px",
  },
  addNewAddress: {
    textDecorationLine: "underline",
    cursor: "pointer",
    marginTop: "50px",
    "&:hover": {
      color: theme.palette.background.default,
      textDecorationLine: "none",
    },
  },
}));

export default useStyles;

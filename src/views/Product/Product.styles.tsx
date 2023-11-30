import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  generalContainer: {
    padding: "80px 0",
    display: "flex",
    width: "100%",
    gap: 80,
    justifyContent: "center",
  },
  leftSideContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "100px",
  },
  productImageContainer: {
    width: "700px",
    height: "750px",
    border: "5px solid #4B3435",
    opacity: 0.9,
    background: theme.palette.primary.light,
    position: "relative",
  },
  productShortNameText: {
    padding: "15px 30px",
    background: theme.palette.background.default,
    fontSize: "64px",
    fontWeight: 700,
    lineHeight: "normal",
    color: theme.palette.secondary.main,
    position: "absolute",
    zIndex: 10,
    left: "-30px",
    top: "-25px",
  },
  sizeChartContainer: {
    padding: "60px 20px 30px 20px",
    border: "5px solid #4B3435",
    opacity: 0.9,
    background: theme.palette.primary.light,
    position: "relative",
    maxWidth: "535px",
  },
  sizeChartTitle: {
    padding: "15px 30px",
    background: theme.palette.background.default,
    fontSize: "36px",
    fontWeight: 600,
    lineHeight: "normal",
    color: theme.palette.primary.light,
    position: "absolute",
    zIndex: 10,
    left: "-30px",
    top: "-25px",
  },
  sizeChartTable: {
    borderCollapse: "collapse",
    width: "100%",
    "& td": {
      padding: "8px",
      textAlign: "center",
    },
    color: theme.palette.primary.main,
    fontSize: "20px",
    fontWeight: 600,
  },
  trStyle: {
    borderBottom: "1px solid #dddddd",
  },
  thStyle: {
    color: theme.palette.background.default,
    padding: "0 23px",
    textAlign: "center",
  },
  columnStylesEven: {
    backgroundColor: "#262424",
  },
  columnStylesOdd: {
    backgroundColor: "black",
  },
  rightSideContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: "31.75%",
  },
  productNameText: {
    color: theme.palette.secondary.main,
    textShadow: "6px 4px 0px #000",
    fontSize: "64px",
    fontWeight: 700,
    lineHeight: "normal",
    marginBottom: "20px",
    textAlign: "left",
  },
  productPriceContainer: {
    padding: "10px 25px",
    background: theme.palette.background.default,
    marginBottom: "55px",
  },
  productPriceText: {
    color: theme.palette.primary.main,
    fontSize: "48px",
    fontWeight: 700,
    lineHeight: "normal",
  },
  optionsContainer: {
    display: "flex",
    gap: "30px",
    margin: "0 0 30px 20px",
  },
  optionsButtonContainer: {
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
  sizeDropdownContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 15px",
    gap: "15px",
    position: "absolute",
    background: theme.palette.background.default,
    opacity: 0.9,
    top: "440px",
    right: "780px",
  },
  sizeDropdownOptions: {
    color: theme.palette.primary.main,
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "normal",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  buyButton: {
    padding: "8px 36px",
    background: theme.palette.secondary.main,
    border: `7px solid ${theme.palette.background.default}`,
    fontSize: "40px",
    color: theme.palette.background.default,
    fontWeight: 700,
    lineHeight: "normal",
    textTransform: "uppercase",
    cursor: "pointer",
    boxSizing: "border-box",
    transition: "background 0.1s, box-shadow 0.3s",
    margin: "0 0 130px 20px",
    "&:hover": {
      backgroundColor: theme.palette.background.default,
      boxShadow: `inset 0 0 0 5px ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
    },
  },
  descriptionTitle: {
    padding: "15px 30px",
    background: theme.palette.background.default,
    fontSize: "36px",
    fontWeight: 600,
    lineHeight: "normal",
    color: theme.palette.primary.light,
    position: "absolute",
    zIndex: 10,
    left: "-30px",
    top: "-25px",
  },
  descriptionContainer: {
    padding: "70px 30px 50px 30px",
    border: "5px solid #4B3435",
    opacity: 0.9,
    background: theme.palette.primary.light,
    position: "relative",
    maxWidth: "500px",
  },
  descriptionText: {
    color: "black",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "normal",
    textAlign: "left",
  },
}));

export default useStyles;

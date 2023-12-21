import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  sectionContainer: {
    padding: "45px 0",
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
  emptyCartContainer: {
    padding: "12px 32px",
    fontSize: "40px",
    fontWeight: 600,
    textTransform: "uppercase",
    marginTop: "40px",
    background: theme.palette.background.default,
    opacity: 0.9,
  },
  cartContentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  },
  recipeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
  },
  summaryContainer: {
    padding: "70px 80px 50px 80px",
    border: "5px solid #4B3435",
    opacity: 0.9,
    background: theme.palette.primary.light,
    position: "relative",
    maxWidth: "700px",
  },
  summaryTitle: {
    fontSize: "36px",
    fontWeight: 600,
    lineHeight: "normal",
    position: "absolute",
    padding: "14px 35px",
    background: theme.palette.background.default,
    left: "-25px",
    top: "-20px",
  },
  summaryContentContainer: {
    color: theme.palette.background.default,
  },
  shipmentOptionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    marginBottom: "45px",
  },
  shipmentHeader: {
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "normal",
  },
  disclaimerText: {
    fontSize: "16px",
    fontWeight: 700,
    textAlign: "right",
  },
  promoText: {
    fontSize: "24px",
    fontWeight: 700,
  },
  promoInput: {
    background: theme.palette.primary.light,
    border: `5px solid ${theme.palette.background.default}`,
    height: "25px",
    width: "330px",
    color: theme.palette.background.default,
    fontWeight: 600,
    fontSize: "16px",
    marginBottom: "24px",
  },
  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    lineHeight: "normal",
  },
  mainPriceRow: {
    fontSize: "36px",
    fontWeight: 700,
    marginBottom: "9px",
  },
  additionalInfoRow: {
    fontSize: "24px",
    fontWeight: 700,
  },
  finalPriceRow: {
    marginTop: "16px",
    fontSize: "36px",
    fontWeight: 700,
    color: theme.palette.background.default,
    gap: "29px",
    alignItems: "center",
  },
  finalPrice: {
    background: theme.palette.background.default,
    color: theme.palette.primary.main,
    padding: "8px 12px",
  },
  divider: {
    marginTop: "13px",
    height: "1px",
    borderBottom: `2px solid ${theme.palette.background.default}`,
  },
  checkOutButton: {
    textTransform: "uppercase",
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "normal",
    color: theme.palette.background.default,
    padding: "8px 28px",
    background: theme.palette.secondary.main,
    border: `7px solid ${theme.palette.background.default}`,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.background.default,
      boxShadow: `inset 0 0 0 4px ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
    },
  },
}));

export default useStyles;

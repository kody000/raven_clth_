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
    width: "100%",
    gap: 80,
    justifyContent: "center",
  },
  leftSideContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "60px",
  },
  rightSideContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "50px",
  },
  textSectionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  textSectionTitle: {
    fontSize: "20px",
    fontWeight: 700,
  },
  textSectionText: {
    fontWeight: 700,
  },
  termsList: {
    margin: 0,
    paddingLeft: "25px",
  },
  faqTitle: {
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
  faqContainer: {
    padding: "80px 30px 50px 30px",
    border: "5px solid #4B3435",
    opacity: 0.9,
    background: theme.palette.primary.light,
    position: "relative",
    maxWidth: "700px",
    width: "100%",
  },
  faqText: {
    color: "black",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "normal",
    textAlign: "left",
  },
  contactLinkContainer: {
    display: "flex",
    gap: "6px",
    marginTop: "15px",
    cursor: "pointer",
    alignItems: "center",
  },
}));

export default useStyles;

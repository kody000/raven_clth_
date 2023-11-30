import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  sectionContainer: {
    padding: "45px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "60px",
  },

  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 300px)",
    gridColumnGap: "125px",
    gridRowGap: "75px",
  },
  paddingContainer: {
    "& .MuiPaginationItem-root": {
      fontWeight: 600,
      fontSize: "16px",
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
    },
    "& .MuiPaginationItem-page.Mui-selected": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.background.default,
    },
  },
}));

export default useStyles;

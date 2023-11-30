import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D3FBD8",
      light: "#F1FFF3",
    },
    secondary: {
      main: "#FD526B",
    },
    background: {
      default: "#262424",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
});

export default theme;

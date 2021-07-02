import { createTheme } from "@material-ui/core/styles";
import "./app.css";

const status = {
  white: "#f9f9f9",
  offWhite: "#F7F5F5",
  trueWhite: "#ffffff",
  grayDk: "#333333",
  gray: "#e0e0e0",
  grayLt: "#f9f9f9",
  blue: "#004D9A",
  blueDk: "#00274e",
  blueLt: "#0073e7",
  teal: "#99ffff",
  tealDk: "#4dffff",
  tealLt: "#e6ffff",
  red: "#bc2c02",
};

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      light: status.blueLt,
      main: status.blue,
      dark: status.blueDk,
    },
    secondary: {
      light: status.tealLt,
      main: status.gray,
      dark: status.tealDk,
    },
    error: { main: status.red },
  },
  status,
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      letterSpacing: 2,
    },
    h2: {
      letterSpacing: 2,
    },
    h3: {
      letterSpacing: 2,
    },
    h4: {
      letterSpacing: 2,
    },
    h5: {
      letterSpacing: 2,
    },
    body1: {
      letterSpacing: 1.5,
      fontSize: 14,
    },
    body2: {
      letterSpacing: 1.5,
      fontSize: 12,
    },
    button: {
      fontFamily: "'Raleway', sans-serif",
      letterSpacing: 3,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        padding: "9px 27px",
        borderRadius: 0,
      },
      contained: {
        boxShadow: "none",
      },
    },
  },
});

export default theme;

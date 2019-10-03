import { createMuiTheme } from "@material-ui/core/styles";
import "./app.css";
require("typeface-open-sans");
require("typeface-homemade-apple");

const status = {
  white: "#f9f9f9",
  offWhite: "#F7F5F5",
  trueWhite: "#ffffff",
  greyDk: "#333333",
  grey: "#e0e0e0",
  greyLt: "#f9f9f9",
  blue: "#004D9A",
  blueDk: "#00274e",
  blueLt: "#0073e7",
  teal: "#99ffff",
  tealDk: "#4dffff",
  tealLt: "#e6ffff",
  red: "#bc2c02"
};

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: status.blueLt,
      main: status.blue,
      dark: status.blueDk
    },
    secondary: {
      light: status.tealLt,
      main: status.grey,
      dark: status.tealDk
    },
    error: { main: status.red }
  },
  status,
  typography: {
    useNextVariants: true,
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 14
  },
  overrides: {
    MuiTypography: {
      colorPrimary: {
        color: status.greyDk
      },
      colorSecondary: {
        color: status.grey
      },
      colorTextSecondary: {
        color: status.white
      }
    }
  }
});

export default theme;

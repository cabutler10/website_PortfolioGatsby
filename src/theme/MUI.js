import { createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
require("typeface-open-sans");
require("typeface-homemade-apple");

const status = {
  white: "#f9f9f9",
  offWhite: "#F7F5F5",
  trueWhite: "#ffffff",
  greyDk: "#333333",
  grey: "#e0e0e0",
  greyLt: "#f9f9f9",
  blue: "#0b00b3",
  blueDk: "#060067",
  blueLt: "#0b00b3",
  blue2: "#0283bc",
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
      main: status.teal,
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

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
  red: "#991010",
  blue2: "#B0E1FC",
  blue: "#f1fcff",
  blueLt: "#fcfeff",
  blueDk: "#e3f9ff",
  green: "#e3ffe9",
  purple: "#e9e3ff",
  navy: "#142940",
  navyLt: "#2b3e53",
  navyDk: "#102033",
  black: "#1f2122",
  pink: "#FFE9E3",
  pinkLt: "#fff8f6",
  pinkDk: "#e5d1cc",
  brown: "#998A8A",
  brownDk: "#6b6060",
  brownLt: "#c1b8b8"
};

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: status.navyLt,
      main: status.navy,
      dark: status.navyDk
    },
    secondary: {
      light: status.blueLt,
      main: status.blue,
      dark: status.blueDk
    },
    error: { main: status.red }
  },
  status,
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 16
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

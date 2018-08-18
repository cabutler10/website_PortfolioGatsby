import { createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
require("typeface-open-sans");
require("typeface-homemade-apple");

const pink = "#FFE9E3";
const pinkLt = "#fff8f6";
const pinkDk = "#e5d1cc";
const brown = "#998A8A";
const brownDk = "#6b6060";
const brownLt = "#c1b8b8";
const offWhite = "#F7F5F5";
const white = "#f9f9f9";
const greyDk = "#333333";
const grey = "#999999";
const greyLt = "#f9f9f9";
const red = "#991010";
const blue2 = "#e3f9ff";
const blue = "#B0E1FC";
const blueLt = "#f9fdff";
const blueDk = "#cce0e5";
const green = "#e3ffe9";
const purple = "#e9e3ff";
const navy = "#142940";
const navyLt = "#2b3e53";
const navyDk = "#102033";
const black = "#1f2122";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: navyLt,
      main: navy,
      dark: navyDk
    },
    secondary: {
      light: blueLt,
      main: blue,
      dark: blueDk
    },
    error: { main: red }
  },
  status: {
    white: white,
    grey: grey,
    greyDk: greyDk,
    greyLt: greyLt,
    brown: brown,
    red: red,
    pink: pink,
    blue: blue,
    blue2: blue2,
    blueDk: blueDk,
    navy: navy,
    green: green,
    purple: purple,
    black: black
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 16
  },
  overrides: {
    MuiTypography: {
      colorPrimary: {
        color: greyDk
      },
      colorSecondary: {
        color: grey
      },
      colorTextSecondary: {
        color: pink
      }
    }
  }
});

export default theme;

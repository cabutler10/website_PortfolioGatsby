import { createTheme } from "@mui/material/styles"
import "./app.css"

const status = {
  grayDk: "#c7c7c7",
  gray: "#e0e0e0",
  grayLt: "#ededed",
  blue: "#00274e",
  red: "#bc2c02",
}

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      light: status.blue,
      main: status.blue,
      dark: status.blue,
    },
    secondary: {
      light: status.grayLt,
      main: status.gray,
      dark: status.grayDk,
    },
    error: { main: status.red },
  },
  status,
  typography: {
    fontFamily: "'Raleway', sans-serif",
    subtitle1: {
      fontSize: 24,
      letterSpacing: 2,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "4px",
          fontWeight: 700,
          letterSpacing: 2,
          color: "#fff",
          transition: "all .2s ease-in-out",
          "&:hover": {
            boxShadow: "none",
            transform: "scale(1.1)",
          },
        },
        outlined: {
          "&:hover": {
            background: "rgba(255, 255, 255, 0)",
          },
        },
      },
    },
  },
})

export default theme

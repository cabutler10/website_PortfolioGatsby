import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { ThemeProvider } from "@mui/material/styles"
import { store } from "./src/redux/store"
import theme from "./src/theme"

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }

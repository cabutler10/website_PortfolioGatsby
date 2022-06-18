/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vH", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          background: theme => theme.palette.secondary.main,
          p: 2,
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: 12 }}>
          © {new Date().getFullYear()} &middot; Butler Web Development
        </Typography>
      </Box>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

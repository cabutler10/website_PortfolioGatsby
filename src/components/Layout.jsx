import React from "react";
import Box from "@material-ui/core/Box";
import Header from "./Header";
import Footer from "./Footer";
import SeoComponent from "./SeoComponent";

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: (theme) => theme.status.white,
        minHeight: "100%",
      }}
    >
      <SeoComponent />
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

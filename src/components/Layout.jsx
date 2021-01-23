import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./seo";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: theme.status.white,
    minHeight: "100%",
  },
  main: {
    flexGrow: 1,
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SEO />
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
}

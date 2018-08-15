import React, { Component } from "react";

//styles
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {}
});

class Layout extends Component {
  state = {
    windowGlobal: undefined
  };
  componentDidMount() {
    const windowGlobal = typeof window !== "undefined" && window;
    this.setState({
      windowGlobal
    });
  }
  render() {
    const { classes, children } = this.props;
    const { windowGlobal } = this.state;
    const pathname = windowGlobal ? windowGlobal.location.pathname : "/";
    return <div>{children}</div>;
  }
}

export default withRoot(withStyles(styles)(Layout));

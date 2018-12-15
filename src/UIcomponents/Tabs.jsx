// React
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// Translations
import { withNamespaces } from "react-i18next";
//3rd Party
import { Droppable, Draggable } from "react-beautiful-dnd";
// Material UI
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

// Styles
const styles = theme => ({
  tabs: {
    minHeight: 40,
    flexGrow: 0
  },
  tab: {
    minHeight: 40,
    height: 40
  },
  tabWrapper: {
    display: "flex",
    flexDirection: "row-reverse"
  },
  addTab: {
    minHeight: 40,
    height: 40,
    minWidth: 40
  },
  closeIcon: {
    fontSize: 14
  },
  scroll: {
    flexGrow: 1,
    backgroundColor: theme.status.green[10],
    overflowY: "auto",
    "&::-webkit-scrollbar-track": {
      WebkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.1)",
      borderRadius: 4,
      backgroundColor: theme.status.grey.greyBG
    },
    "&::-webkit-scrollbar": {
      width: 4,
      backgroundColor: theme.status.grey.greyBG
    },
    "&::-webkit-scrollbar-thumb": {
      WebkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.1)",
      borderRadius: 4,
      backgroundColor: theme.status.grey.greyDivs
    }
  },
  listItemText: {
    paddingTop: 15,
    fontSize: 14
  }
});

class SelectedProducts extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    selectedData: PropTypes.array,
    handleSelectedDataDelete: PropTypes.func
  };

  state = {
    value: 0
  };

  handleChange = (event, value) => {
    if (value === "add") {
      this.handleNewTab();
    } else {
      this.setState({ value });
    }
  };

  handleNewTab = () => {
    const { handleSelectedDataChange, selectedData } = this.props;
    const tempName = `${this.props.t(
      "order_section.setNameDefault"
    )} ${selectedData.length + 1}`;
    selectedData.push({
      set: tempName,
      selected: [],
      notes: []
    });
    handleSelectedDataChange(selectedData);
    this.setState({
      value: selectedData.length - 1
    });
  };

  handleDeleteTab = (event, idx) => {
    event.stopPropagation();
    const { handleSelectedDataChange, selectedData } = this.props;
    handleSelectedDataChange(selectedData.filter((x, i) => i !== idx));
    this.setState(prevState => ({
      value: prevState.value === 0 ? prevState.value : prevState.value - 1
    }));
  };

  render() {
    const { selectedData, handleSelectedDataDelete, classes, t } = this.props;
    const { value } = this.state;
    const tempName = `${this.props.t(
      "order_section.setNameDefault"
    )} ${selectedData.length + 1}`;
    const tabs = selectedData ? selectedData.map(elem => elem.set) : tempName;

    return (
      <Fragment>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          className={classes.tabs}
          indicatorColor="primary"
          textColor="primary"
          scrollable
          scrollButtons={tabs.length > 2 ? "on" : "off"}
        >
          {tabs.map((elem, idx) => (
            <Tab
              label={elem}
              key={`tab${idx}`}
              className={classes.tab}
              component="div"
              icon={
                <IconButton onClick={event => this.handleDeleteTab(event, idx)}>
                  <CloseIcon className={classes.closeIcon} />
                </IconButton>
              }
              classes={{ wrapper: classes.tabWrapper }}
            />
          ))}
          <Tab icon={<AddIcon />} value="add" className={classes.addTab} />
        </Tabs>

        <Droppable droppableId={tabs[value]}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={classes.scroll}
            >
              <List disablePadding>
                <Fragment>
                  {selectedData.length > 0 &&
                    selectedData[value].selected.length > 0 &&
                    selectedData[value].selected.map((elem, idx) => (
                      <Draggable
                        draggableId={`draggableItem${idx}`}
                        index={idx}
                        key={`draggableItem${idx}`}
                      >
                        {provided => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <ListItem dense>
                              <ListItemText primary={elem.name} />
                              <ListItemSecondaryAction>
                                <IconButton
                                  aria-label={t("common.delete")}
                                  onClick={() =>
                                    handleSelectedDataDelete(elem, value)
                                  }
                                >
                                  <CloseIcon className={classes.closeIcon} />
                                </IconButton>
                              </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {selectedData.length === 0 ||
                    (selectedData[value].selected.length === 0 && (
                      <ListItem dense>
                        <ListItemText
                          primary={t("order_section.noSelection")}
                          primaryTypographyProps={{
                            className: classes.listItemText
                          }}
                        />
                      </ListItem>
                    ))}
                  {provided.placeholder}
                </Fragment>
              </List>
            </div>
          )}
        </Droppable>
      </Fragment>
    );
  }
}

export default withNamespaces()(withStyles(styles)(SelectedProducts));

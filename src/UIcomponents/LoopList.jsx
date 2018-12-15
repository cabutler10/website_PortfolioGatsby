// React
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
//3rd Party
import { Droppable, Draggable } from "react-beautiful-dnd";
// Material UI
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// Styles
const styles = theme => ({
  nav: {
    flexGrow: 1
  },
  list: {
    paddingLeft: 15,
    paddingTop: 0,
    paddingBottom: 0
  },
  listItem: {
    paddingLeft: 5
  },
  dragItem: {
    background: theme.status.grey.white
  },
  dragListItem: {
    background: theme.status.grey.white,
    borderRadius: 4,
    boxShadow: `0 15px 20px 0 ${theme.status.green[80]}`,
    border: `solid 1px ${theme.status.green[40]}`,
    paddingLeft: 5
  },
  listItemText: {
    fontSize: 14
  },
  divider: {
    height: 1.3
  },
  icon: {
    fontSize: 20,
    fill: theme.status.grey.dark
  },
  scroll: {
    flexGrow: 1,
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
  }
});

class AvailableProductsList extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    availableData: PropTypes.array,
    isChild: PropTypes.bool
  };

  state = {
    open: this.props.availableData
      ? new Array(this.props.availableData.length).fill(false)
      : false
  };

  // handleAddAll = tabIndex => {
  //   const all = [];
  //   let handleLoop = obj => {
  //     obj.forEach(elem => {
  //       if (elem.isFinalItem) {
  //         all.push(elem);
  //       } else {
  //         handleLoop(elem.data);
  //       }
  //     });
  //   };
  //   handleLoop(this.state.availableData);
  //   this.setState({
  //     selectedData: update(this.state.selectedData, {
  //       [tabIndex]: {
  //         selected: { $set: all }
  //       }
  //     })
  //   });
  // };

  handleClick = idx => {
    let newArray = this.state.open;
    newArray[idx] = !newArray[idx];
    this.setState(state => ({ open: newArray }));
  };

  render() {
    const { availableData, isChild, classes } = this.props;
    return (
      <div className={classes.scroll}>
        <List component="nav" className={isChild ? classes.list : classes.nav}>
          <Droppable droppableId="availableList">
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {availableData &&
                  availableData.map((elem, idx) => {
                    return elem.isFinalItem === "true" ? (
                      <Draggable
                        key={`listItem${idx}`}
                        draggableId={`${elem.id}-+-${elem.name}`}
                        index={idx}
                        className={classes.dragItem}
                      >
                        {(provided, snapshot) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            isdragging={snapshot.isDragging.toString()}
                          >
                            <ListItem
                              button
                              dense
                              onClick={() => this.handleClick(idx)}
                              className={
                                snapshot.isDragging
                                  ? classes.dragListItem
                                  : classes.listItem
                              }
                            >
                              <ListItemText
                                primary={elem.name}
                                primaryTypographyProps={{
                                  className: classes.listItemText
                                }}
                              />
                            </ListItem>
                            <Divider className={classes.divider} />
                          </div>
                        )}
                      </Draggable>
                    ) : (
                      <Fragment key={`listItem${idx}`}>
                        <ListItem
                          button
                          dense
                          onClick={() => this.handleClick(idx)}
                          className={classes.listItem}
                        >
                          <ListItemText
                            primary={elem.name}
                            primaryTypographyProps={{
                              className: classes.listItemText
                            }}
                          />
                          {this.state.open[idx] ? (
                            <ExpandLess className={classes.icon} />
                          ) : (
                            <ExpandMore className={classes.icon} />
                          )}
                        </ListItem>
                        <Divider className={classes.divider} />
                        <Collapse
                          in={this.state.open[idx]}
                          timeout="auto"
                          unmountOnExit
                        >
                          <AvailableProductsList
                            availableData={elem.data}
                            classes={classes}
                            isChild
                          />
                        </Collapse>
                      </Fragment>
                    );
                  })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(AvailableProductsList);

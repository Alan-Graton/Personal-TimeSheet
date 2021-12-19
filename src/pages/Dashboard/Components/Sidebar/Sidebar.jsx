import React from "react";

// Styles
import useStyles from "./styles";

// Components
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

function Sidebar() {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={1} square >
      <Button className={classes.buttons} >Home</Button>
      <Divider />
      <Button className={classes.buttons} >Launch</Button>
      <Button className={classes.buttons} >Query</Button>
      <Divider />
    </Paper>
  );
}

export default Sidebar;

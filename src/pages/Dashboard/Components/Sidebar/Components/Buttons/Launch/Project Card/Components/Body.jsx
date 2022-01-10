import React from "react";

import Rows from "./Rows";

import TableBody from "@material-ui/core/TableBody";

import useStyles from "./styles/Body";

function Body() {
  const classes = useStyles();
  return (
    <TableBody className={classes.body}>
      <Rows />
    </TableBody>
  );
}

export default Body;

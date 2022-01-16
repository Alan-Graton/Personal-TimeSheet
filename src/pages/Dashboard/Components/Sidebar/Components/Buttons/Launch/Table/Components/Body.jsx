import React from "react";

// JSX Table Component
import Rows from "./Rows";

import TableBody from "@material-ui/core/TableBody";

import useStyles from "./styles/Body";

function Body({ projectCardShow }) {
  const classes = useStyles();
  return (
    <>
      <TableBody className={classes.body}>
        <Rows projectCardShow={projectCardShow} />
      </TableBody>
    </>
  );
}

export default Body;

import React from "react";

import Rows from "./Rows";

import TableBody from "@material-ui/core/TableBody";

import useStyles from "./styles/Body";

function Body({ fieldsValues }) {
  const classes = useStyles();
  return (
    <TableBody className={classes.body}>
      <Rows fieldsValues={fieldsValues} />
    </TableBody>
  );
}

export default Body;

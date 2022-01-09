import React from "react";

// JSX Table Components
import Header from "./Table/Components/Header";
import Body from "./Table/Components/Body";

import Paper from "@material-ui/core/Paper";

import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";

import useStyles from "../Launch/Table/Components/styles/Table"

function Launch() {
    const classes = useStyles();
  return(
      <>
          <TableContainer className={classes.tableContainer} component={Paper} >
              <Table className={classes.tableRoot} >
                  <Header />
                  <Body />
              </Table>
          </TableContainer>
      </>
  );
}

export default Launch;

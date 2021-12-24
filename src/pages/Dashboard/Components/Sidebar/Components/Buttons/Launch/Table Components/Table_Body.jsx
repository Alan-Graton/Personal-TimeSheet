import React from "react";

// Styles
import useStyles from "./TB_Body_styles";
import Paper from "@material-ui/core/Paper";

import TB_Header from "./Table_Header";
import TB_Rows from "./Table_Body_Rows";

// Table Components
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";

function TB_Body() {
  const classes = useStyles();
  return (
    <>
      <TableContainer className={classes.tableContainer} component={Paper} >
        <Table className={classes.tableRoot}>
          <TB_Header />
          <TB_Rows />
        </Table>
      </TableContainer>
    </>
  );
}

export default TB_Body;

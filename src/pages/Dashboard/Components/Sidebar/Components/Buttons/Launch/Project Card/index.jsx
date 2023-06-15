import React from "react";

import Header from "./Components/Header";
import Body from "./Components/Body";

import Paper from "@material-ui/core/Paper";

import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";

import useStyles from "./Components/styles/Index";

function ProjectCard({ fieldsValues }) {
  const classes = useStyles();
  return (
    <>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.tableRoot}>
          <Header />
          <Body fieldsValues={fieldsValues} />
        </Table>
      </TableContainer>
    </>
  );
}

export default ProjectCard;

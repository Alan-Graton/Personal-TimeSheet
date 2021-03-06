import React, { useState } from "react";

// JSX Table Components
import Header from "./Table/Components/Header";
import Body from "./Table/Components/Body";

import ProjectCard from "./Project Card/index";

import Paper from "@material-ui/core/Paper";

import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";

import useStyles from "../Launch/Table/Components/styles/Table";

function Launch() {
  const classes = useStyles();

  const [projectCard, setProjectCard] = useState([]);
  const handleSetProjectCard = (event) => {
    event.preventDefault();

    setProjectCard([...projectCard, +1]);
  }

  return (
    <>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.tableRoot}>
          <Header />
          <Body projectCardShow={handleSetProjectCard} />
        </Table>
      </TableContainer>
      {
        projectCard.map((index) => (
          <ProjectCard key={index} />
        ))
      }
    </>
  );
}

export default Launch;

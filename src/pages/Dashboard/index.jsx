import React from "react";

import Header from "./Components/Header/index";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
  },
  main: {
    height: "100vh",
    padding: 24,
  },
  toolbar: {
    minHeight: 64,
  },
});

function Dashboard() {
  const classes = useStyles();
  return (
    <div>
        <Header />
      <div className={classes.toolbar}></div>
      <main>Oi Alan</main>
    </div>
  );
}

export default Dashboard;

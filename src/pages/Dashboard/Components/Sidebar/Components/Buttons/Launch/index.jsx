import React from "react";

import TB_Body from "./Table Components/Table_Body";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    tableRoot: {
        marginTop: 70,
    }
})

function Launch() {
    const classes = useStyles();
  return(
      <div className={classes.tableRoot} >
          <TB_Body />
      </div>
  );
}

export default Launch;

import React from "react";

import DaySummary from "../../Time Logic/DaySummary";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import useStyles from "./styles/Rows";

function Rows({ projectCardShow }) {
  const classes = useStyles();

  const dailyValues = [0, 0, 0, 0, 0];
  const dailySummary = (d, v) => {
    dailyValues[d] = v;
  };

  return (
    <div>
      <TableRow className={classes.tableRow}>
      <TableCell>
        <input type="date" className={classes.dateInput} />
      </TableCell>
      <TableCell>
        <Button className={classes.select_create_Project}>Projects</Button>
      </TableCell>
      <TableCell>
        <Typography className={classes.componenteLabels} variant="button">
          Description
        </Typography>
        <TextField color="secondary" sixe="small" />
      </TableCell>
      <TableCell>
        <DaySummary
          changeNotifyStart={(v) => dailySummary(0, v)}
          changeNotifyEnd={(v) => dailySummary(0, v)}
        />
      </TableCell>
      <TableCell>
        <Button onClick={projectCardShow} className={classes.addProject}>Add</Button>
      </TableCell>
    </TableRow>
    </div>
  );
}

export default Rows;

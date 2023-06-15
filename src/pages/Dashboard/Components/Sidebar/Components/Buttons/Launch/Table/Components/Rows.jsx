import React from "react";

import DaySummary from "../../Time Logic/DaySummary";
import SelectProjectBtn from "./SelectProjectBtn";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import useStyles from "./styles/Rows";

function Rows({ projectCardShow, fieldsValues }) {
  const classes = useStyles();

  const dailyValues = [0, 0, 0, 0, 0];
  const dailySummary = (d, v) => {
    dailyValues[d] = v;
  };

  const handleFieldsOnBlur = (event) => {
    event.preventDefault();
    var fieldName = event.target.getAttribute("name");
    var fieldValue = event.target.value;

    Object.keys(fieldsValues).forEach((key) => {
      if(fieldName === key){
        fieldsValues[key] = fieldValue;
        console.log(fieldsValues[key]);
      }
    })
  }

  return (
    <div>
      <TableRow className={classes.tableRow}>
        <TableCell>
          <input name="projectDate" onBlur={handleFieldsOnBlur} type="date" className={classes.dateInput} />
        </TableCell>
        <TableCell>
          <SelectProjectBtn />
        </TableCell>
        <TableCell>
          <Typography className={classes.componenteLabels} variant="button">
            Description
          </Typography>
          <TextField name="projectDescription" onBlur={handleFieldsOnBlur} color="secondary" size="small" />
        </TableCell>
        <TableCell>
          <DaySummary
            changeNotifyStart={(v) => dailySummary(0, v)}
            changeNotifyEnd={(v) => dailySummary(0, v)}
          />
        </TableCell>
        <TableCell>
          <Button onClick={projectCardShow} className={classes.addProject}>
            Add
          </Button>
        </TableCell>
      </TableRow>
    </div>
  );
}

export default Rows;

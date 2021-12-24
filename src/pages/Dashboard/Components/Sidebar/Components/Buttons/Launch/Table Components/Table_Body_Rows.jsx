import React from "react";

import DaySummary from "../Time Logic/DaySummary";

// Styles
import useStyles from "./Table_BodyRows_styles";

// Styles Components
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

// Table Components
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function TB_Rows() {
  const classes = useStyles();

  const dailyValues = [0, 0, 0, 0, 0];
  const dailySummary = (d, v) => {
    dailyValues[d] = v;
  };

  return (
    <TableRow>
      <TableCell className="TimeSheet-ProjectDate">
        <input type="date" className={classes.dateInput} />
      </TableCell>
      <TableCell className="TimeSheet-ProjectName">
        {/* USAR O COMPONENTE <Menu /> DO MATERIAL-UI */}
      </TableCell>
      <TableCell className="TimeSheet-ProjectDescription">
        <Typography variant="button" className={classes.componenteLabels}>
          Descrição
        </Typography>
        <TextField color="secondary" size="small" />
      </TableCell>
      <TableCell className="TimeSheet-ProjectHours">
        <DaySummary
          changeNotifyStart={(v) => dailySummary(0, v)}
          changeNotifyEnd={(v) => dailySummary(0, v)}
        />
      </TableCell>
      <TableCell className="TimeSheet-SetProjectCard">
        <Button className={classes.addProject}>Add</Button>
      </TableCell>
    </TableRow>
  );
}

export default TB_Rows;

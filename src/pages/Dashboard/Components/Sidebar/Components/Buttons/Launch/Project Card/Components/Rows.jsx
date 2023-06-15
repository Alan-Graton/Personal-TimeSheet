import React from "react";

import Typography from "@material-ui/core/Typography";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import useStyles from "./styles/Rows";

function Rows(prop) {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={classes.projectCardContent}>
        <Typography>{prop.projectDate}</Typography>
      </TableCell>
      <TableCell className={classes.projectCardContent}>
        <Typography>{prop.project}</Typography>
      </TableCell>
      <TableCell className={classes.projectCardContent}>
        <Typography>{prop.projectDescription}</Typography>
      </TableCell>
      <TableCell className={classes.projectCardContent}>
        <Typography>{prop.projectStart}</Typography>
      </TableCell>
      <TableCell className={classes.projectCardContent}>
        <Typography>{prop.projectEnd}</Typography>
      </TableCell>
      <TableCell className={classes.projectCardContent}>
        <Typography>{prop.projectTotalHours}</Typography>
      </TableCell>
    </TableRow>
  );
}

export default Rows;

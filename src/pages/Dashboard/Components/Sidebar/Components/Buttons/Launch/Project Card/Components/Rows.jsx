import React from "react";

import Typography from "@material-ui/core/Typography";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import useStyles from "./styles/Rows";

function Rows() {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={classes.projectCardContent}>
        <Typography>Data de Lançamento</Typography>
      </TableCell>
      <TableCell className={classes.projectCardContent}>
        <Typography>Nome do Projeto</Typography>
      </TableCell>
      <TableCell className={classes.projectCardContent}>
        <Typography>Descrição do Projeto</Typography>
      </TableCell>
      <TableCell className={classes.projectCardContent}>
        <Typography>Hora de Entrada</Typography>
      </TableCell>
      <TableCell className={classes.projectCardContent}>
        <Typography>Hora de Saída</Typography>
      </TableCell>
      <TableCell className={classes.projectCardContent}>
        <Typography>Hora Total</Typography>
      </TableCell>
    </TableRow>
  );
}

export default Rows;

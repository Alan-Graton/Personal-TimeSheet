import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { TableCell, TableHead, TableRow } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    usersTableHeaderCell: {
        fontWeight: "bold",
        backgroundColor: theme.palette.info.main,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
    }
}));

function Header() {
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.usersTableHeaderCell} >User</TableCell>
        <TableCell className={classes.usersTableHeaderCell} >Project</TableCell>
        <TableCell className={classes.usersTableHeaderCell} >Date</TableCell>
        <TableCell className={classes.usersTableHeaderCell} >Start</TableCell>
        <TableCell className={classes.usersTableHeaderCell} >End</TableCell>
        <TableCell className={classes.usersTableHeaderCell} >Total</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default Header;

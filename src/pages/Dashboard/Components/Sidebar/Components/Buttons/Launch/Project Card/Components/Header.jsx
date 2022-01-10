import React from "react";

// Styles
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

// Table Components
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  PCHeaderCell: {
    fontWeight: "bold",
    textAlign: "right",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.PCHeaderCell}>
          Timestamp: 11:39 - 10/01/2022
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default Header;

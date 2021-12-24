import React from "react";

// Styles
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

// Table Components
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  headerCell: {
    fontWeight: "bold",
    textAlign: "right",
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
}));

function TB_Header() {
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.headerCell}>
          <Typography variant="h6">Launch Hours</Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TB_Header;

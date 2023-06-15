import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { TableCell, Avatar, Grid, Typography } from "@material-ui/core";

import ProfilePic_Test from "./ProfilePic_Test.png";

const useStyles = makeStyles((theme) => ({
  hourStart: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "green",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
  hourEnd: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "red",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
  totalHours: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "purple",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
    marginRight: "30px",
  },
  cellsContent: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
  }
}));

function Cells() {
  const classes = useStyles();
  return (
    <>
      <TableCell className={classes.cellsContent} >
        <Grid container>
          <Grid item lg={2}>
            <Avatar
              src={ProfilePic_Test}
              alt="Bugs Bunny"
              className={classes.avatar}
            />
          </Grid>
          <Grid item lg={10}>
            <Typography className={classes.name}>Bugs Bunny</Typography>
            <Typography color="textSecondary" variant="body2">
              bunny.bugs@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell>
        <Typography color="primary" variant="subtitle">
          Science Study
        </Typography>
        <Typography color="textSecondary" variant="body2">
          Studied about animals and plants
        </Typography>
      </TableCell>
      <TableCell>20/01/2022</TableCell>
      <TableCell className={classes.cellsContent} >
        <Typography className={classes.hourStart}>9:00</Typography>
      </TableCell>
      <TableCell className={classes.cellsContent} >
        <Typography className={classes.hourEnd}>15:00</Typography>
      </TableCell>
      <TableCell className={classes.cellsContent} >
        <Typography className={classes.totalHours}>6:00</Typography>
      </TableCell>
    </>
  );
}

export default Cells;

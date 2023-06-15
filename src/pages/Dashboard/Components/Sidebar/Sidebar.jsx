import React from "react";

// Styles
import useStyles from "./styles";

// Components
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

// Buttons Icons
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import LaunchRoundedIcon from "@material-ui/icons/LaunchRounded";
import AssessmentRoundedIcon from "@material-ui/icons/AssessmentRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

function Sidebar(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={1} square>
      <Button
        endIcon={<HomeRoundedIcon />}
        onClick={props.HomePageClick}
        className={classes.buttons}
      >
        Home
      </Button>
      <Divider />
      <Button
        endIcon={<LaunchRoundedIcon />}
        onClick={props.LaunchPageClick}
        className={classes.buttons}
      >
        Launch
      </Button>
      <Button
        endIcon={<AssessmentRoundedIcon />}
        onClick={props.QueryPageClick}
        className={classes.buttons}
      >
        Query
      </Button>
      <Divider />
      <Button
        endIcon={<InfoRoundedIcon />}
        onClick={props.AboutPageClick}
        className={classes.buttons}
      >
        About
      </Button>
    </Paper>
  );
}

export default Sidebar;

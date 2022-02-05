import React from "react";

import useStyles from "./styles";

// Components Styles
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import ProfilePic_Test from "./ProfilePic_Test.png";

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Card className={classes.card} >
        <CardHeader
          title={
            <div>
              <img
                className={classes.bugsBunny}
                src={ProfilePic_Test}
                alt="Profile"
              />
            </div>
          }
          subheader={
            <div>
              <Typography variant="overline">Mr. Bugs Bunny</Typography>
              <Divider />
              <Typography variant="h6">Account</Typography>
              <Typography>bunny.bugs@gmail.com</Typography>
            </div>
          }
        />
      </Card>
    </div>
  );
}

export default Home;

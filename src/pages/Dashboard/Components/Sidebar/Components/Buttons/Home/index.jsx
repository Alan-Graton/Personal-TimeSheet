import React from "react";

import useStyles from "./styles";

// Components Styles
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardContent}
          title={
            <div>
              <Avatar
                alt="Alan Graton"
                sx={{ width: 5, height: 50, backgroundColor: "#3bd408" }}
                src="/"
              />
            </div>
          }
          subheader={
            <div>
              <Typography>Alan Graton Lourenço de Brito</Typography>
              <Divider />
            </div>
          }
        />
      </Card>
    </div>
  );
}

export default Home;

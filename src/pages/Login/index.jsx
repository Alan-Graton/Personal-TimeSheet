import React from "react";

// Styles
import useStyles from "./styles";

// Components
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Login({ SetUserEvent }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          title={
            <div className={classes.cardHeaderTitle}>
              <h1>Login</h1>
            </div>
          }
          subheader={
            <div className={classes.cardSubHeaderBtns}>
              <Button variant="contained" className={classes.BtnNoAccount}>
                Continue without an account
              </Button>
              <Button variant="contained" className={classes.BtnEmailAccount}>
                Enter with an E-mail
              </Button>
              <Typography variant="caption">
                Without an account will only be needed to create a Profile Name
              </Typography>
            </div>
          }
        />
      </Card>
      <button onClick={SetUserEvent}>Access Dashboard</button>
    </div>
  );
}

export default Login;

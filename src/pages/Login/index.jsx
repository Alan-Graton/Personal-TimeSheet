import React from "react";

// Images
import gmail from "./gmail.png";
import anonymous from "./anonymous.png";

// Styles
import useStyles from "./styles";

// Components
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

// Icons
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";

function Login({ SetUserEvent }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          title={
            <div className={classes.cardHeaderTitle}>
              <h1>Sign up</h1>
            </div>
          }
          subheader={
            <div className={classes.cardSubHeaderBtns}>
              <Button
                onClick={SetUserEvent}
                endIcon={<BusinessRoundedIcon />}
                color="primary"
                variant="contained"
              >
                I'm a Company
              </Button>
              <Divider
                style={{
                  width: "100%",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              />
              <Button
                onClick={SetUserEvent}
                endIcon={<NoAccountsOutlinedIcon />}
                color="inherit"
                variant="contained"
              >
                Continue without an Account
              </Button>
              <Divider
                style={{
                  width: "100%",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              />
              <Typography variant="button">Or</Typography>
              <img
                className={classes.gmailAccount}
                onClick={SetUserEvent}
                src={gmail}
                alt="Gmail Account"
              />
            </div>
          }
        />
        <Typography></Typography>
      </Card>
    </div>
  );
}

export default Login;

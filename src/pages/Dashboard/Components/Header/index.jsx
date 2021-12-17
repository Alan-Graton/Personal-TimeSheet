import React from "react";

import useStyles from "./styles";

// Icons
import { IconButton } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";

// Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";

function Header() {
    const classes = useStyles();
  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <IconButton>
          <MenuIcon
            onClick={() => {
              alert("Esconder Sidebar");
            }}
            fontSize="medium"
          />
        </IconButton>
        <div className={classes.grow} ></div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

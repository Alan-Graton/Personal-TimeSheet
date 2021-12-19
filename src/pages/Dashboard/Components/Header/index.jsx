import React from "react";

import useStyles from "./styles";

// Icons
import { IconButton } from "@material-ui/core";
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
        <div className={classes.grow}></div>
        <h3>Your Personal TimeSheet</h3>
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Avatar
            className={classes.avatar}
            onClick={() => {
              alert("Mostrar dados do Usuário");
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

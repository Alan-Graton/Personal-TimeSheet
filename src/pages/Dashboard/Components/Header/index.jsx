import React, { useState } from "react";

// Styles
import useStyles from "./styles";

// Icons
import { IconButton } from "@material-ui/core";
import WatchLaterTwoToneIcon from "@material-ui/icons/WatchLaterTwoTone";
import MenuIcon from "@material-ui/icons/Menu";

// Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";

function Header({HeaderAvatarClick}) {
  const classes = useStyles();

  const [avatarClick, setAvatarClick] = useState(false);
  const handleAvatarClick = (event) => {
    event.preventDefault();

    setAvatarClick(!avatarClick);
  };
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
        <WatchLaterTwoToneIcon fontSize="large" />
        <h3>Your Personal TimeSheet</h3>
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Avatar className={classes.avatar} onClick={HeaderAvatarClick} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

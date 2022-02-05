import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Textfield from "@material-ui/core/Textfield";
import Divider from "@material-ui/core/Divider";

import MenuItem from "@material-ui/core/MenuItem";

import useStyles from "../Components/styles/Rows";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import StyledMenu from "./Select Project Component/StyledMenu";

function SelectProjectBtn() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    // Redirecting the "Menu" to open where the current event is taking place
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [field, setField] = useState(false);
  return (
    <>
      <Button
        className={classes.addProject}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Project
      </Button>
      <div className={classes.styledMenuDiv} >
        <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem disableRipple>
            <div className={classes.newProjectdiv}>
              <Button
                onClick={() => {
                  setField(!field);
                }}
                className={classes.createNewProject}
              >
                New Project
              </Button>
              {field && <Textfield placeholder="New project" />}
            </div>
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem disableRipple>
            <Textfield placeHolder="Project name" />
          </MenuItem>
        </StyledMenu>
      </div>
    </>
  );
}

export default SelectProjectBtn;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
        color="transparent"
        className="navContainer"
      >
        <Toolbar>
          <Typography variant="h4" className="navTitle">
            <Link className="navTitle underline" to="/">
              PicHub
            </Link>
          </Typography>
          <Button component={Link} to="/">
            Home
          </Button>
          <Button component={Link} to="/signin">
            Login
          </Button>
          <Button component={Link} to="/signup">
            SignUp
          </Button>
          <Button component={Link} to="/about">
            About
          </Button>
          <Switch
            color="default"
            checked={props.checked}
            onChange={props.onChange}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

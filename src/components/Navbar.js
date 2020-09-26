import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navlink: {
    padding: "6px 20px",
    fontWeight: "600",
    color: "#fff",
  },
  title: {
    flexGrow: 1,
    fontFamily: "Pacifico",
    letterSpacing: "2px",
  },
  Nav: {
    position: "absolute",
    color: "#fff",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
        color="transparent"
        className={classes.Nav}
      >
        <Toolbar>
          <Typography
            variant="h4"
            className={classes.title}
          >
            PicHub
          </Typography>
          <Button
            component={Link}
            to="/"
            className={classes.navlink}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/signin"
            className={classes.navlink}
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/signup"
            className={classes.navlink}
          >
            SignUp
          </Button>
          <Button
            component={Link}
            to="/about"
            className={classes.navlink}
          >
            About
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

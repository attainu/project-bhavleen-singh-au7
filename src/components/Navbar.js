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
  title: {
    flexGrow: 1,
    fontFamily: "Pacifico",
    letterSpacing: "2px",
  },
  Nav: {
    position: "absolute",
    color: "#fff",
    "& .MuiButton-label": {
      color: "#fff",
      padding: "6px 20px 6px 0px",
      fontWeight: "600",
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
        color={props.color}
        className={props.className}
      >
        <Toolbar>
          <Typography
            variant="h4"
            className={classes.title}
          >
            <Link className="fff" to="/">
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

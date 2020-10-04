import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Image from "../images/negi.png";
import { setUserSignout } from "../redux/actions/authActions";
import { connect } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: 65,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  useEffect(() => {});

  const handleClick = () => {
    props.setUserSignout();
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color="inherit"
        className="navContainer"
        style={{
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography variant="h4" className="navTitle">
            <Link className="navTitle underline" to="/">
              PicHub
            </Link>
          </Typography>

          <Switch
            color="default"
            checked={props.checked}
            onChange={props.onChange}
          />

          {props.isAuth ? (
            <Fragment>
              <IconButton component={Link} to="/dashboard">
                <HomeIcon />
              </IconButton>
              <Link to="profile">
                <IconButton>
                  <Avatar alt="user profile" src={Image} />
                </IconButton>
              </Link>
              <Link to="/" className="underline">
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleClick}
                >
                    Signout
                </Button>
              </Link>
            </Fragment>
          ) : (
            <Fragment>
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
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.userRoot.isAuthenticated,
  };
};

export default connect(mapStateToProps, { setUserSignout })(
  Navbar
);

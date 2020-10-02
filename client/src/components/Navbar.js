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
import { Link, useHistory } from "react-router-dom";
import { isAuth, signout } from "../utils/helper";
import Image from "../images/negi.png";
import { setUserSignout } from '../redux/actions/authActions'
import { connect } from 'react-redux'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        height: 65,
    },
}));

const Navbar = (props) => {
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {});

    const handleClick = () => {
        props.setUserSignout()
        // history.push('/')
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                color="inherit"
                className="navContainer"
                style={{ background: "transparent", boxShadow: "none" }}
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
                    {!isAuth() && (
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

                    {isAuth() && (
                        <Fragment>
                            <IconButton>
                                <Avatar alt="user profile" src={Image} />
                            </IconButton>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={handleClick}
                            >
                                Signout
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
    user: state.userRoot
  }
}

export default connect(mapStateToProps, {setUserSignout})(Navbar);

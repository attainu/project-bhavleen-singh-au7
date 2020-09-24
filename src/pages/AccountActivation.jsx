import React, { Fragment } from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  center: {
    textAlign: "center",
  },
  title: {
    fontFamily: "Pacifico",
    letterSpacing: "2px",
    padding: "15px 0px",
  },
  nameStyle: {
    fontWeight: "bold",
    color: "crimson",
  },
  paperStyle: {
    margin: "10% auto",
    width: "30%",
    padding: "30px",
    textAlign: "center",
  },
}));

const AccountActivation = () => {
  const classes = useStyles();
  const name = "Bhavleen";

  return (
    <Fragment>
      <AppBar className={classes.center}>
        <Typography variant="h4" className={classes.title}>
          <Link className="fff" to="/">
            PicHub
          </Link>
        </Typography>
      </AppBar>

      <Paper elevation={4} className={classes.paperStyle}>
        <h3 className="mb">
          Hey{" "}
          <span className={classes.nameStyle}>{name}</span>,
          Ready to activate your account?
        </h3>
        <Button variant="contained" color="secondary">
          Activate Account
        </Button>
      </Paper>
    </Fragment>
  );
};

export default AccountActivation;

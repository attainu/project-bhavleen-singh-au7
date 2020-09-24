import React, { Fragment } from "react";
import {
  Button,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Navbar from "../components/Navbar";
import MuiInput from "../components/MuiInput";
import ForgetImage from "../images/idea.png";

const useStyles = makeStyles((theme) => ({
  Nav: {
    "& .MuiButton-label": {
      color: "#fff",
      padding: "6px 10px",
      fontWeight: "600",
    },
  },
  form: {
    width: "50%",
    margin: "5% auto 0px auto",
    padding: "20px",
    textAlign: "center",
  },
  mb: {
    marginBottom: "30px",
  },
}));

const ForgetPassword = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar color="primary" className={classes.Nav} />
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{
          minHeight: "90vh",
        }}
      >
        <Grid item xs={12} md={6}>
          <img
            src={ForgetImage}
            alt="forgetsvg"
            className="thumbImage"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.form} elevation={3}>
            <h1 className="logo">PicHub</h1>
            <Typography variant="subtitle1" gutterBottom>
              Enter your email and we will send you a
              password reset link.
            </Typography>
            <form autoComplete="off">
              <MuiInput
                label="Email Address"
                name="email"
                type="email"
                className={classes.mb}
                // value={}
                // onChange={}
                // error={}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.mb}
              >
                Request Password Reset Link
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ForgetPassword;

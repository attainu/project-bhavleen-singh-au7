import React, { Fragment } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import Navbar from "../components/Navbar";
import MuiInput from "../components/MuiInput";
import PasswordField from "../components/PasswordField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/userAction";

const useStyles = makeStyles((theme) => ({
  Nav: {
    "& .MuiButton-label": {
      color: "#fff",
      padding: "6px 10px",
      fontWeight: "600",
    },
  },
  form: {
    width: "30%",
    margin: "5% auto 0px auto",
    padding: "20px",
    textAlign: "center",
  },
  formBottom: {
    width: "30%",
    margin: "10px auto",
    padding: "20px",
    textAlign: "center",
  },
  mb: {
    marginBottom: "20px",
  },
}));

const Signin = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar color="primary" className={classes.Nav} />
      <Paper className={classes.form} elevation={3}>
        <h1 className="logo">PicHub</h1>
        <form autoComplete="off">
          <MuiInput
            label="Email Address"
            name="username"
            type="text"
            className={classes.mb}
            // value={}
            // onChange={}
            // error={}
          />
          <PasswordField
            label="Password"
            className={classes.mb}
            labelWidth={70}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.mb}
          >
            Log In
          </Button>
          <Link>Forgot Password?</Link>
        </form>
      </Paper>

      <Paper
        className={classes.formBottom}
        variant="outlined"
      >
        Don't have an account?{" "}
        <Link to="/signup">Sign Up</Link>
      </Paper>
    </Fragment>
  );
};

export default Signin;

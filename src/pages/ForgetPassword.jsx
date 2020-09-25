import React, { Fragment, useState } from "react";
import {
  Button,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Navbar from "../components/Navbar";
import MuiInput from "../components/MuiInput";
import ForgetImage from "../images/forgot_password.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.min.css";

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

  const [values, setValues] = useState({
    email: "",
    buttonText: "Request Password Reset Link",
  });

  const { email, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });

    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API}/forgot-password`,
      data: { email },
    })
      .then((response) => {
        // console.log("FORGOT PASSWORD SUCCESS", response);
        toast.success(response.data.message);
        setValues({ ...values, buttonText: "Requested" });
      })
      .catch((error) => {
        // console.log(
        //   "FORGOT PASSWORD ERROR",
        //   error.response.data
        // );
        toast.error(error.response.data.error);
        setValues({
          ...values,
          buttonText: "Request Password Reset Link",
        });
      });
  };

  const passwordForgetForm = () => (
    <Paper className={classes.form} elevation={3}>
      <h1 className="logo">PicHub</h1>
      <Typography variant="subtitle1" gutterBottom>
        Enter your email and we will send you a password
        reset link.
      </Typography>
      <form autoComplete="off">
        <MuiInput
          label="Email Address"
          name="email"
          type="email"
          className={classes.mb}
          value={email}
          onChange={handleChange("email")}
          // error={}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.mb}
          onClick={handleSubmit}
        >
          {buttonText}
        </Button>
      </form>
    </Paper>
  );

  return (
    <Fragment>
      <Navbar color="primary" className={classes.Nav} />
      <ToastContainer />
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
          {passwordForgetForm()}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ForgetPassword;

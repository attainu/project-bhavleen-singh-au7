import React, { Fragment, useState } from "react";
import {
  Button,
  makeStyles,
  Paper,
} from "@material-ui/core";
import Navbar from "../components/Navbar";
import MuiInput from "../components/MuiInput";
import PasswordField from "../components/PasswordField";
import { Link, Redirect } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Axios from "axios";
import { isAuth } from "../utils/helper";

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

const Signup = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    buttonText: "Sign Up",
    showPassword: false,
  });

  const {
    username,
    email,
    password,
    password2,
    showPassword,
    buttonText,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  // Show Password Text
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Button Submit Event
  const handleSubmit = (history) => (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Signning Up" });

    Axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/signup`,
      data: { username, email, password },
    })
      .then((response) => {
        setValues({
          ...values,
          username: "",
          email: "",
          password: "",
          buttonText: "Submitted",
        });
        toast.success(response.data.message);

        setTimeout(() => {
          history.push("/login");
        }, 3000);
      })
      .catch((error) => {
        setValues({ ...values, buttonText: "Sign up" });
        toast.error(error.response.data.error);
      });
  };

  const signupForm = () => (
    <Paper className={classes.form} elevation={3}>
      <h1 className="logo">PicHub</h1>
      <form autoComplete="off">
        <MuiInput
          label="Username"
          name="username"
          type="text"
          className={classes.mb}
          value={username}
          onChange={handleChange("username")}
          // error={}
        />
        <MuiInput
          label="Email Address"
          name="email"
          type="email"
          className={classes.mb}
          value={email}
          onChange={handleChange("email")}
          // error={}
        />
        <PasswordField
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handleChange("password")}
          className={classes.mb}
          labelWidth={70}
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        />
        <PasswordField
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          value={password2}
          onChange={handleChange("password2")}
          className={classes.mb}
          labelWidth={135}
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
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
      {isAuth() ? <Redirect to="/dashboard" /> : null}
      {signupForm()}
      <Paper
        className={classes.formBottom}
        variant="outlined"
      >
        Have an account <Link to="/signin">Log In</Link>
      </Paper>
    </Fragment>
  );
};

export default Signup;

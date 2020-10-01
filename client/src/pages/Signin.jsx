import React, { Fragment, useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Paper,
} from "@material-ui/core";
import MuiInput from "../components/MuiInput";
import { toast } from "react-toastify";
import { Link, Redirect } from "react-router-dom";
import LoginImage from "../images/login.png";
import { authenticate, isAuth } from "../utils/helper";
import {
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "50%",
    margin: "5% auto 0px auto",
    padding: theme.spacing(4),
    textAlign: "center",
  },
  formBottom: {
    width: "50%",
    margin: "10px auto",
    padding: theme.spacing(4),
    textAlign: "center",
  },
  mb: {
    marginBottom: theme.spacing(4),
  },
}));

const Signin = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [errors, setErrors] = useState({});

  const { email, password, showPassword } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });

    validate({ [name]: event.target.value });
  };

  // Show Password Text
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  // Validations
  const validate = (values) => {
    let temp = { ...errors };

    if ("email" in values)
      temp.email = /[\D\d]{4}@[\D]{4}.[\D]{3}/.test(email)
        ? ""
        : "Email Address is not Valid.";

    if ("password" in values)
      temp.password =
        password.length > 5
          ? ""
          : "Minimum 6 characters are required.";

    setErrors({ ...temp });

    if (values)
      return Object.values(temp).every((x) => x === "");
  };

  // Button Submit Event
  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });

    Axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/user/login`,
      data: { email, password },
    })
      .then((response) => {
        // Save the response (user, token ) localstorage/cookie
        console.log(response);
        authenticate(response, () => {
          setValues({
            ...values,
            email: "",
            password: "",
          });
        });
      })
      .catch((error) => {
        // console.log("LOGIN ERROR", error.response.data);

        setValues({ ...values });
        toast.error(error.response.data.error);
      });
  };

  const loginForm = () => (
    <Paper className={classes.form} elevation={3}>
      <h1 className="logo">PicHub</h1>
      <form autoComplete="off">
        <MuiInput
          label="Email Address"
          name="email"
          type="email"
          className={classes.mb}
          value={email}
          onChange={handleChange("email")}
          error={errors.email}
        />
        <MuiInput
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          className={classes.mb}
          value={password}
          onChange={handleChange("password")}
          error={errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={handleClickShowPassword}
                >
                  {values.showPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          className={classes.mb}
          onClick={handleSubmit}
        >
          Log In
        </Button>
        <Link className="link" to="/forget-password">
          Forgot Password?
        </Link>
      </form>
    </Paper>
  );

  return (
    <Fragment>
      {isAuth() ? <Redirect to="/dashboard" /> : null}
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
            src={LoginImage}
            alt="loginsvg"
            className="thumbImage"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {loginForm()}
          <Paper
            className={classes.formBottom}
            variant="outlined"
          >
            Don't have an account?{" "}
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Signin;

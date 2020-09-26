import React, { Fragment, useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Paper,
} from "@material-ui/core";
import Navbar from "../components/Navbar";
import MuiInput from "../components/MuiInput";
import { Link, Redirect } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.min.css";
import Axios from "axios";
import { isAuth } from "../utils/helper";
import SignupImage from "../images/signup.png";
import {
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";

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

const Signup = ({ history }) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    buttonText: "Sign Up",
    showPassword: false,
  });

  const [errors, setErrors] = useState({});

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

    validate({ [name]: event.target.value });
    console.log(password);
    console.log(password2);
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

    if ("username" in values)
      temp.username =
        username.length >= 2
          ? ""
          : "Minimum characters length should be 3.";

    if ("email" in values)
      temp.email = /[\D\d]{4}@[\D]{4}.[\D]{3}/.test(email)
        ? ""
        : "Email Address is not Valid.";

    if ("password" in values)
      temp.password =
        password.length > 5
          ? ""
          : "Minimum 6 characters are required.";

    if ("password2" in values)
      temp.password2 =
        password === password2
          ? ""
          : "Passwords do not match.";

    setErrors({ ...temp });

    if (values)
      return Object.values(temp).every((x) => x === "");
  };

  // Button Submit Event
  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Signing Up" });

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
          password2: "",
          buttonText: "Submitted",
        });

        setTimeout(() => {
          history.push("/signin");
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
          error={errors.username}
        />
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
        <MuiInput
          label="Confirm Password"
          name="password2"
          type={showPassword ? "text" : "password"}
          className={classes.mb}
          value={password2}
          onChange={handleChange("password2")}
          error={errors.password2}
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
            src={SignupImage}
            alt="signupsvg"
            className="thumbImage"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {signupForm()}
          <Paper
            className={classes.formBottom}
            variant="outlined"
          >
            Have an account <Link to="/signin">Log In</Link>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Signup;

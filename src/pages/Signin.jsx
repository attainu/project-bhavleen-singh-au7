import React, { Fragment, useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Paper,
} from "@material-ui/core";
import Navbar from "../components/Navbar";
import MuiInput from "../components/MuiInput";
// import PasswordField from "../components/PasswordField";
import { toast, ToastContainer } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.min.css";
import { Link, Redirect } from "react-router-dom";
import LoginImage from "../images/login.png";
import { authenticate, isAuth } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/userAction";
import {
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import Axios from "axios";

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

const Signin = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    email: "",
    password: "",
    buttonText: "Log In",
    showPassword: false,
  });

  const {
    email,
    password,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Logging In" });
    Axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/signin`,
      data: { email, password },
    })
      .then((response) => {
        // Save the response (user, token ) localstorage/cookie
        authenticate(response, () => {
          setValues({
            ...values,
            email: "",
            password: "",
            buttonText: "Submitted",
          });
        });
      })
      .catch((error) => {
        // console.log("LOGIN ERROR", error.response.data);

        setValues({ ...values, buttonText: "Login" });
        toast.error(error.response.data.error);
      });
  };

  const loginForm = () => (
    <Paper className={classes.form} elevation={3}>
      <h1 className="logo">PicHub</h1>
      <form autoComplete="off">
        <MuiInput
          label="Email Address"
          name="username"
          type="text"
          className={classes.mb}
          onChange={handleChange("email")}
          value={email}
          // error={}
        />
        <FormControl
          variant="outlined"
          fullWidth
          className={classes.mb}
          size="small"
        >
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className={classes.mb}
          onClick={handleSubmit}
        >
          {buttonText}
        </Button>
        <Link to="/forget-password">Forgot Password?</Link>
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
        <Grid item xs={12} sm={6}>
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
            <Link to="/signup">Sign Up</Link>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Signin;

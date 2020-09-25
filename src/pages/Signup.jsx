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

        <FormControl
          variant="outlined"
          fullWidth
          className={classes.mb}
          size="small"
        >
          <InputLabel>Confirm Password</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            value={password2}
            onChange={handleChange("password2")}
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
            labelWidth={135}
          />
        </FormControl>

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

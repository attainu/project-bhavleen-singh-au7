import React, {
  Fragment,
  useEffect,
  useState,
} from "react";
import {
  AppBar,
  Button,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import PasswordField from "../components/PasswordField";
import SecureImage from "../images/secure.png";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.min.css";

const useStyles = makeStyles((theme) => ({
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
    width: "50%",
    padding: theme.spacing(5),
    textAlign: "center",
  },
  mb: {
    marginBottom: theme.spacing(5),
  },
}));

const ResetPassword = ({ match }) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    email: "",
    token: "",
    newPassword: "",
    buttonText: "Reset Password",
    showPassword: false,
  });

  useEffect(() => {
    let token = match.params.token;
    let name = jwt.decode(token);
    if (token) {
      setValues({ ...values, name, token });
    }
  }, []);

  const {
    name,
    token,
    newPassword,
    showPassword,
    buttonText,
  } = values;

  const handleChange = (event) => {
    setValues({
      ...values,
      newPassword: event.target.value,
    });
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
    setValues({
      ...values,
      buttonText: "Submitting",
    });

    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API}/reset-password`,
      data: { newPassword, resetPasswordLink: token },
    })
      .then((response) => {
        // console.log("RESET PASSWORD SUCCESS", response);
        toast.success(response.data.message);
        setValues({
          ...values,
          buttonText: "Done",
        });
      })
      .catch((error) => {
        // console.log(
        //   "RESET PASSWORD ERROR",
        //   error.response.data
        // );
        toast.error(error.response.data.error);
        setValues({
          ...values,
          buttonText: "Reset Password",
        });
      });
  };

  const resetPasswordForm = () => (
    <Paper elevation={4} className={classes.paperStyle}>
      <Typography
        variant="subtitle1"
        className={classes.mb}
      >
        Enter your New Secure Password.
      </Typography>
      <form autoComplete="off">
        <PasswordField
          label="New Password"
          type={showPassword ? "text" : "password"}
          value={newPassword}
          onChange={handleChange}
          className={classes.mb}
          labelWidth={105}
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
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
      <AppBar className={classes.center}>
        <Typography variant="h4" className={classes.title}>
          <Link className="fff" to="/">
            PicHub
          </Link>
        </Typography>
      </AppBar>
      <ToastContainer />
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{
          minHeight: "100vh",
        }}
      >
        <Grid item xs={12} md={6}>
          <img
            src={SecureImage}
            alt="securesvg"
            className="thumbImage"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {resetPasswordForm()}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ResetPassword;

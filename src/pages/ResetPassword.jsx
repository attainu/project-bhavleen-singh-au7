import React, { Fragment, useState } from "react";
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
    width: "50%",
    padding: "30px",
    textAlign: "center",
  },
  mb: {
    marginBottom: "30px",
  },
}));

const ResetPassword = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    buttonText: "Reset Password",
    showPassword: false,
  });

  const { password, showPassword, buttonText } = values;

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

  return (
    <Fragment>
      <AppBar className={classes.center}>
        <Typography variant="h4" className={classes.title}>
          <Link className="fff" to="/">
            PicHub
          </Link>
        </Typography>
      </AppBar>
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
          <Paper
            elevation={4}
            className={classes.paperStyle}
          >
            <Typography
              variant="subtitle1"
              className={classes.mb}
            >
              Enter your New Secure Password.
            </Typography>
            <form autoComplete="off">
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
              <Button
                variant="contained"
                color="primary"
                className={classes.mb}
              >
                {buttonText}
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ResetPassword;

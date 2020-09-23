import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
  Nav: {
    "& .MuiButton-label": {
      color: "#fff",
      padding: "6px 10px",
      fontWeight: "600",
    },
  },
}));

const Signup = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar color="primary" className={classes.Nav} />
      <h1>SignUp Page</h1>
    </Fragment>
  );
};

export default Signup;

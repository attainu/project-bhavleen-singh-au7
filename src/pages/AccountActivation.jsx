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
import { Link } from "react-router-dom";
import AccountImage from "../images/Account_Activation.png";
import jwt from "jsonwebtoken";
import { ToastContainer, toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.min.css";
import Axios from "axios";

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
    width: "60%",
    padding: theme.spacing(5),
    textAlign: "center",
  },
}));

const AccountActivation = ({ match, history }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    token: "",
    show: true,
  });

  useEffect(() => {
    let token = match.params.token;
    let name = jwt.decode(token);
    if (token) {
      setValues({ ...values, name, token });
    }
  }, []);

  const { name, token } = values;

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/account-activation`,
      data: { token },
    })
      .then((response) => {
        // console.log("ACCOUNT ACTIVATION", response);
        setValues({ ...values, show: false });
        toast.success(response.data.message);

        setTimeout(() => {
          history.push("/signin");
        }, 4000);
      })
      .catch((error) => {
        // console.log(
        //   "ACCOUNT ACTIVATION ERROR",
        //   error.response.data.error
        // );
        toast.error(error.response.data.error);
      });
  };

  const accountActivate = () => (
    <Paper elevation={4} className={classes.paperStyle}>
      <h3 className="mb">
        Hey{" "}
        <span className={classes.nameStyle}>{name}</span>,
        Ready to activate your account?
      </h3>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Activate Account
      </Button>
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
            src={AccountImage}
            alt="acountsvg"
            className="thumbImage"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {accountActivate()}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AccountActivation;

import React, { Fragment } from "react";
import {
  Avatar,
  Typography,
  Paper,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MuiInput from "../components/MuiInput";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  placement: {
    margin: "20px 40px",
    padding: theme.spacing(3),
    paddingLeft: "30%",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10%",
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  pb: {
    paddingBottom: theme.spacing(4),
  },
  ml: {
    marginLeft: theme.spacing(10),
  },
}));

const EditProfileForm = ({ user }) => {
  const classes = useStyles();
  console.log(user);
  // const []
  if (user) {
    //   const { age, email, name, username } = user;
    //   console.log(age);
    console.log(user.user);
  }

  const editForm = () => (
    <Paper className={classes.placement} elevation={3}>
      <Grid container className={classes.pb}>
        <Grid item xs={1}>
          <Avatar
            alt="Remy Sharp"
            src=""
            className={classes.large}
          />
        </Grid>

        <Grid item xs={6} className={classes.ml}>
          <Typography variant="h6">UserName</Typography>
          <Link>Change Profile Photo</Link>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container className={classes.pb}>
        <Grid item xs={1}>
          <Typography variant="h6">Username</Typography>
        </Grid>
        <Grid item xs={6} className={classes.ml}>
          <MuiInput
            label="Username"
            type="text"
            width="90%"
          />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container className={classes.pb}>
        <Grid item xs={1}>
          <Typography variant="h6">Name</Typography>
        </Grid>
        <Grid item xs={6} className={classes.ml}>
          <MuiInput label="Name" type="text" />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container className={classes.pb}>
        <Grid item xs={1}>
          <Typography variant="h6">Email</Typography>
        </Grid>
        <Grid item xs={6} className={classes.ml}>
          <MuiInput label="Email" type="text" />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container className={classes.pb}>
        <Grid item xs={1}>
          <Typography variant="h6">Bio</Typography>
        </Grid>
        <Grid item xs={6} className={classes.ml}>
          <MuiInput label="Bio" type="text" />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container className={classes.pb}>
        <Grid item xs={1}>
          <Typography variant="h6">Age</Typography>
        </Grid>
        <Grid item xs={6} className={classes.ml}>
          <MuiInput label="Age" type="text" />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container className={classes.pb}>
        <Grid item xs={1}></Grid>
        <Grid
          item
          xs={6}
          className={classes.ml}
          style={{ textAlign: "right" }}
        >
          <Button variant="contained" color="primary">
            Update Profile
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );

  return <Fragment>{editForm()}</Fragment>;
};

const mapStateToProps = (state) => {
  return {
    user: state.userRoot,
  };
};

export default connect(
  mapStateToProps,
  null
)(EditProfileForm);
// export default EditProfileForm;

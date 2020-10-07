import React, { Fragment, useState } from "react";
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

  const [values, setValues] = useState({
    username: "",
    // username: user.user.username,
    name: "",
    // name: user.user.name,
    email: "",
    // email: user.user.email,
    age: "",
    // age: user.user.age,
    bio: "",
    // bio: user.user.bio,
  });

  const { username, name, email, age, bio } = values;

  const [errors, setErrors] = useState({});

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    user.user && (
      <Paper className={classes.placement} elevation={3}>
        <Grid container className={classes.pb}>
          <Grid item xs={1}>
            <Avatar
              alt={user.user.name}
              src={
                user.user.avatar
                  ? user.user.avatar.imageUrl
                  : "https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png"
              }
              className={classes.large}
            />
          </Grid>

          <Grid item xs={6} className={classes.ml}>
            <Typography variant="h6">
              {user.user.username}
            </Typography>
            <Link className="link" to="/profile/edit">
              Change Profile Photo
            </Link>
            <Link
              className="link"
              style={{ marginLeft: "20px" }}
              to="/forget-password"
            >
              Change Password
            </Link>
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
              name="username"
              type="text"
              value={username}
              onChange={handleChange("username")}
              error={errors.username}
            />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>

        <Grid container className={classes.pb}>
          <Grid item xs={1}>
            <Typography variant="h6">Name</Typography>
          </Grid>
          <Grid item xs={6} className={classes.ml}>
            <MuiInput
              label="Name"
              name="name"
              type="text"
              value={name}
              onChange={handleChange("name")}
              error={errors.name}
            />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>

        <Grid container className={classes.pb}>
          <Grid item xs={1}>
            <Typography variant="h6">Email</Typography>
          </Grid>
          <Grid item xs={6} className={classes.ml}>
            <MuiInput
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange("email")}
              error={errors.email}
            />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>

        <Grid container className={classes.pb}>
          <Grid item xs={1}>
            <Typography variant="h6">Age</Typography>
          </Grid>
          <Grid item xs={6} className={classes.ml}>
            <MuiInput
              label="Age"
              name="age"
              type="text"
              value={age}
              onChange={handleChange("age")}
              error={errors.age}
            />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>

        <Grid container className={classes.pb}>
          <Grid item xs={1}>
            <Typography variant="h6">Bio</Typography>
          </Grid>
          <Grid item xs={6} className={classes.ml}>
            <MuiInput
              label="Bio"
              name="bio"
              type="text"
              multiline={true}
              rows={3}
              value={bio}
              onChange={handleChange("bio")}
              error={errors.bio}
            />
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Update Profile
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userRoot,
    // profile: state.profileRoot,
  };
};

export default connect(
  mapStateToProps,
  null
)(EditProfileForm);
// export default EditProfileForm;

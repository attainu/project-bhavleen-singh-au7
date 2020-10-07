import React, { Fragment } from "react";
import { Avatar, Typography, Paper, Grid, Button } from "@material-ui/core";
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

    return (
        user.user && (
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
                        <Typography variant="h6">
                            {user.user.username}
                        </Typography>
                        <Link to="/profile/edit">Change Profile Photo</Link>
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
                            value={user.user.username}
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
                            type="text"
                            value={user.user.name}
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
                            type="text"
                            value={user.user.email}
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
                            type="text"
                            value={user.user.age}
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
                            type="text"
                            value={user.user.bio}
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
                        <Button variant="contained" color="primary">
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

export default connect(mapStateToProps, null)(EditProfileForm);
// export default EditProfileForm;

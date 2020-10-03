import React, { useEffect, lazy, Suspense } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import UploadDialog from "../components/UploadDialog";
import UploadModal from "../components/UploadModal";
// import Card2 from "../components/Card2";
import { setProfile } from "../redux/actions/profileActions";
import UserBio from "../components/UserBio";
import { Redirect } from "react-router-dom";
const Card2 = lazy(() => import("../components/Card2"));

const useStyles = makeStyles({
  typographyStyles: {
    fontWeight: 500,
    display: "inline",
    marginRight: "8%",
  },
  usernameStyles: {
    fontFamily: "Segoe UI",
    fontSize: "2rem",
    fontWeight: 100,
    marginBottom: "1.5rem",
    marginTop: "0.9rem",
    color: "#757575",
  },
  nameBioStyles: {
    marginTop: "1.5rem",
    fontFamily: "Montserrat",
  },
  lowFontWeightStyles: {
    fontWeight: 200,
    fontSize: "0.9rem",
  },
  imgCenter: {
    textAlign: "center",
  },
  gridImg: {
    marginTop: "40px",
  },
  input: {
    display: "none",
  },
  photoUploadStyle: {
    marginTop: "20px",
    textAlign: "center",
  },
});

function UserProfile({ isAuth, setProfileData, profile }) {
  const classes = useStyles();
  const {
    typographyStyles,
    usernameStyles,
    nameBioStyles,
    lowFontWeightStyles,
    imgCenter,
    gridImg,
    input,
    photoUploadStyle,
  } = classes;

  useEffect(() => {
    setProfileData();
  }, []);

  console.log(profile);

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    profile.posts && (
      <Grid container>
        <Grid item md={2}></Grid>
        <Grid
          container
          item
          md={8}
          xs={12}
          direction="column"
        >
          {/* Users Bio */}
          <UserBio
            user={profile.user}
            classes={classes}
            postCount={profile.posts.length}
          />

          {/* <Grid xs={12} >
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="icon-button-file"
                        type="file"
                    />
                    <label htmlFor="icon-button-file">
                        <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                        >
                            <PhotoCamera />
                        </IconButton>
                    </label>
                </Grid> */}

          {/* Photo upload Modal*/}
          <Grid item xs={12} className={photoUploadStyle}>
            <UploadDialog />
          </Grid>

          {/* User Posts */}
          <Grid container item xs={12} className={gridImg}>
            {profile.posts &&
              profile.posts.map((post) => (
                <Grid item xs={4} key={post._id}>
                  <Suspense
                    fallback={<div>Loding .....</div>}
                  >
                    <Card2 post={post} />
                  </Suspense>
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    )
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.profileRoot,
    isAuth: state.userRoot.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProfileData: () => {
      dispatch(setProfile());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

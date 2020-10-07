import React, {
  useEffect,
  lazy,
  Suspense,
  useState,
} from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import UploadDialog from "../components/UploadDialog";
import { setProfile } from "../redux/actions/profileActions";
import UserBio from "../components/UserBio";
import LoaderImage from "../images/placeholder.gif";
const Card2 = lazy(() => import("../components/Card2"));

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  typographyStyles: {
    fontWeight: 500,
    display: "inline",
    marginRight: "8%",
  },
  usernameStyles: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
    marginTop: "0.9rem",
  },
  nameBioStyles: {
    marginTop: "1.5rem",
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
}));

function UserProfile({ isAuth, setProfileData, profile }) {
  const classes = useStyles();
  const [showProgress, setShowProgress] = useState(false);

  const { gridImg, photoUploadStyle } = classes;

  useEffect(() => {
    setProfileData();
  }, [setProfileData]);

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
            showFollowButton={false}
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
            <UploadDialog
              setShowProgress={setShowProgress}
            />
          </Grid>

          {/* Uploading Loader */}
          {showProgress && (
            <div
              className={classes.root}
              style={{
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              <LinearProgress color="secondary" />
            </div>
          )}

          {/* User Posts */}
          <Grid container item xs={12} className={gridImg}>
            {profile.posts &&
              profile.posts.map((post) => (
                <Grid item xs={4} key={post._id}>
                  <Suspense
                    fallback={
                      <img
                        src={LoaderImage}
                        alt="loader_image"
                        width={345}
                      />
                    }
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

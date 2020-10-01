import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import UploadModal from "../components/UploadModal"
import Card2 from "../components/Card2";
import profilePic from "../images/negi.png";


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
        display: 'none',
    },
    photoUploadStyle: {
        marginTop: "20px",
        textAlign: "center"
    }
});

function UserProfile() {
    const classes = useStyles();
    const {
        typographyStyles,
        usernameStyles,
        nameBioStyles,
        lowFontWeightStyles,
        imgCenter,
        gridImg,
        input,
        photoUploadStyle
    } = classes;
    return (
        <Grid container>
            <Grid item xs={2}></Grid>
            <CssBaseline />
            <Grid container item xs={8} direction="column">

                {/* Users Bio */}
                <Grid container item xs={12}>
                    <Grid item xs={4} className={imgCenter}>
                        <img
                            src={profilePic}
                            alt="profile pic"
                            width="180px"
                        ></img>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h4" className={usernameStyles}>
                            oncenegisaid
                        </Typography>
                        <Typography className={typographyStyles}>
                            17{" "}
                            <span className={lowFontWeightStyles}>posts</span>
                        </Typography>
                        <Typography className={typographyStyles}>
                            472{" "}
                            <span className={lowFontWeightStyles}>
                                followers
                            </span>
                        </Typography>
                        <Typography className={typographyStyles}>
                            1071{" "}
                            <span className={lowFontWeightStyles}>
                                following
                            </span>
                        </Typography>
                        <Typography className={nameBioStyles}>
                            Qaran Negi
                        </Typography>
                        <Typography className={lowFontWeightStyles}>
                            web connoisseur, Everyone can talk. Execution is the
                            game.
                        </Typography>
                    </Grid>
                </Grid>
                
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
                <Grid xs={12} className={photoUploadStyle}>
                    <UploadModal />
                </Grid>

                {/* User Posts */}
                <Grid container item xs={12} className={gridImg}>
                    <Grid item xs={4}>
                        <Card2 />
                    </Grid>
                    <Grid item xs={4}>
                        <Card2 />
                    </Grid>
                    <Grid item xs={4}>
                        <Card2 />
                    </Grid>
                    <Grid item xs={4}>
                        <Card2 />
                    </Grid>
                    <Grid item xs={4}>
                        <Card2 />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    );
}

export default UserProfile;

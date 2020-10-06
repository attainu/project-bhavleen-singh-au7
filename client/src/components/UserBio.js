import React from "react";
import { Grid, Typography } from "@material-ui/core";

function UserBio({ user, classes, postCount }) {
    const {
        typographyStyles,
        imgCenter,
        usernameStyles,
        lowFontWeightStyles,
        nameBioStyles,
    } = classes;

    return (
        user && (
            <Grid container item xs={12}>
                <Grid item xs={4} className={imgCenter}>
                    <img
                        src={
                            user.avatar
                                ? user.avatar.imageUrl
                                : "https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png"
                        }
                        alt="profile pic"
                        width="180px"
                        style={{ borderRadius: 100 }}
                    ></img>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h4" className={usernameStyles}>
                        {user.username}
                    </Typography>
                    <Typography className={typographyStyles}>
                        {postCount}{" "}
                        <span className={lowFontWeightStyles}>posts</span>
                    </Typography>
                    <Typography className={typographyStyles}>
                        472{" "}
                        <span className={lowFontWeightStyles}>followers</span>
                    </Typography>
                    <Typography className={typographyStyles}>
                        1071{" "}
                        <span className={lowFontWeightStyles}>following</span>
                    </Typography>
                    <Typography className={nameBioStyles}>
                        {user.name}
                    </Typography>
                    <Typography className={lowFontWeightStyles}>
                        web connoisseur, Everyone can talk. Execution is the
                        game.
                    </Typography>
                </Grid>
            </Grid>
        )
    );
}

export default UserBio;

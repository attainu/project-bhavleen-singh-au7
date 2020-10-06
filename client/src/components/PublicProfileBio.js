import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { setFollowUser } from "../redux/actions/postActions"

function UserBio({ user, classes, postCount, showFollowButton, userId, followUser }) {

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
                        {showFollowButton && 
                        <Button color="primary" 
                            variant="outlined"
                            style={{ marginLeft: "20px"}}
                            onClick={() => followUser(userId)}
                        >
                            Follow
                        </Button>}
                    </Typography>
                    <Typography className={typographyStyles}>
                        {postCount.length}{" "}
                        <span className={lowFontWeightStyles}>posts</span>
                    </Typography>
                    <Typography className={typographyStyles}>
                        {user.followers.length ? user.followers.length: 0}{" "}
                        <span className={lowFontWeightStyles}>followers</span>
                    </Typography>
                    <Typography className={typographyStyles}>
                        {user.following.length ? user.following.length: 0}{" "}
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


const mapDispatchToProps = (dispatch) => {
    return {
        followUser: userId => dispatch(setFollowUser(userId))
    }
}

export default connect(null, mapDispatchToProps)(UserBio);

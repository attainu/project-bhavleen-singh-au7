import React from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    typographyStyles: {
        fontWeight: 100,
        fontSize: "20px"
    },
    contentStyles: {
        border: "solid 1px #e0e0e0",
        padding: "30px",
    },
});

function EditProfileForm() {
    const classes = useStyles();
    const { contentStyles, typographyStyles } = classes;

    return (
        <Grid container>
            <Grid item md={3}></Grid>
            <Grid
                container
                item
                md={6}
                direction="column"
                className={contentStyles}
            >
                <Avatar
                    alt="AvatarImage"
                    // src={
                    //     owner.avatar
                    //         ? owner.avatar.imageUrl
                    //         : "https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png"
                    // }
                    src={"https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"}
                    style={{ display: "inline"}}
                />
                <Typography 
                    variant="h4"
                    className={typographyStyles}
                    style={{ display: "inline"}}
                >
                    oncenegisaid
                </Typography>
                <Typography 
                    variant="h4"
                    className={typographyStyles}
                    style={{ display: "inline"}}
                >
                    oncenegisaid
                </Typography>
            </Grid>
            <Grid item md={3}></Grid>
        </Grid>
    );
}

export default EditProfileForm;

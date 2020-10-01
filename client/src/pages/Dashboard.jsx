import React, { Fragment } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";

import GetAppIcon from "@material-ui/icons/GetApp";
import AddCommentIcon from "@material-ui/icons/AddComment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import image from "../images/gallery.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    textAlign: "center",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "red",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Fragment>
      <Grid container justify="center">
        <Grid item sm={10}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar className={classes.avatar}>
                  BS
                </Avatar>
              }
              action={
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              }
              title="userName"
              subheader="September 14, 2016"
            />
            <CardMedia
              className={classes.media}
              image={image}
              title="caption"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
              >
                This is something amazing about this great
                picture.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton onClick={handleExpandClick}>
                <AddCommentIcon />
              </IconButton>
              <IconButton>
                <GetAppIcon />
              </IconButton>
            </CardActions>
            <Collapse
              in={expanded}
              timeout="auto"
              unmountOnExit
            >
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until
                  simmering, add saffron and set aside for
                  10 minutes.
                </Typography>
                <Typography paragraph>
                  the pan. Add pimentón, bay leaves, garlic,
                  tomatoes, onion, salt and pepper, and
                  cook, stirring often until thickened and
                  fragrant, about 10 minutes. Add saffron
                  broth and remaining 4 1/2 cups chicken
                  broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  n without stirring, until mussels have
                  opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that
                  don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for
                  10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Dashboard;

import React, { Fragment } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddCommentIcon from "@material-ui/icons/AddComment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderTwoToneIcon from "@material-ui/icons/FavoriteBorderTwoTone";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "100vw",
    margin: "5%",
  },
  media: {
    paddingTop: "56.25%",
  },
  avatar: {
    backgroundColor: "red",
  },
}));

const MainCards = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Fragment>
      <Card className={classes.root} elevation={4}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {props.avatar}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          }
          title={<strong>{props.title}</strong>}
          subheader={props.date}
        />
        <CardMedia
          className={classes.media}
          image={props.image}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
          >
            {props.caption}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <FavoriteBorderTwoToneIcon />
            <FavoriteOutlinedIcon color="secondary" />
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
            <strong>Comments:</strong>
            <Typography paragraph>
              {props.comments}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Fragment>
  );
};

export default MainCards;

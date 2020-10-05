import React, { Fragment, useState } from "react";
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
  Badge,
} from "@material-ui/core";
import AddCommentIcon from "@material-ui/icons/AddComment";
import FavoriteBorderTwoToneIcon from "@material-ui/icons/FavoriteBorderTwoTone";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import {
  addLike,
  removeLike,
} from "../redux/actions/postActions";
import { connect } from "react-redux";
import CommentForm from "./CommentForm";
import SingleComment from "./SingleComment";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "100vw",
    margin: "5%",
  },
  media: {
    paddingTop: "56.25%",
    height: 0,
  },
}));

const MainCards = ({
  addLike,
  removeLike,
  auth,
  post,
  post: {
    _id,
    image,
    caption,
    owner,
    likes,
    comments,
    createdAt,
  },
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <Fragment>
      <Card className={classes.root} elevation={4}>
        <CardHeader
          avatar={
            <Avatar
              alt="AvatarImage"
              src={
                owner.avatar
                  ? owner.avatar.imageUrl
                  : "https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png"
              }
            />
          }
          title={<strong>{owner.name}</strong>}
          subheader={owner.username}
        />
        <CardMedia
          className={classes.media}
          image={image.imageUrl}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
          >
            {caption}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={(e) => addLike(_id)}>
            <Badge
              badgeContent={likes.length}
              color="primary"
            >
              <FavoriteBorderTwoToneIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={(e) => removeLike(_id)}>
            <Badge
              badgeContent={likes.length}
              color="primary"
            >
              <FavoriteOutlinedIcon color="secondary" />
            </Badge>
          </IconButton>
          <IconButton
            onClick={() => setExpanded(!expanded)}
          >
            <Badge
              badgeContent={comments.length}
              color="primary"
            >
              <AddCommentIcon />
            </Badge>
          </IconButton>
        </CardActions>
        <CommentForm postId={_id} />
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <strong>Comments:</strong>
            {post.comments.map((comment) => (
              <SingleComment
                key={comments._id}
                comment={comment}
                postId={_id}
              />
            ))}
          </CardContent>
        </Collapse>
      </Card>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.userRoot.isAuthenticated,
    addLike: state.publicRoot.posts,
  };
};

export default connect(mapStateToProps, {
  addLike,
  removeLike,
})(MainCards);

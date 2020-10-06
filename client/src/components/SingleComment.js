import React, { Fragment } from "react";
import { connect } from "react-redux";
import { deleteComment } from "../redux/actions/postActions";
import {
  Avatar,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const SingleComment = ({
  postId,
  comment: { _id, comment, name, userId },
  user,
  deleteComment,
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.margin} variant="outlined">
        <Grid container spacing={2}>
          <Grid item sm={1}>
            <Avatar
              alt={name}
              src="/static/images/avatar/1.jpg"
              className={classes.small}
            />
          </Grid>
          <Grid item sm={3}>
            <Typography variant="subtitle2">
              {name}
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="body1">
              {comment}
            </Typography>
          </Grid>
          <Grid item sm={1}>
            {userId === user._id && (
              <IconButton
                className={classes.small}
                onClick={(e) => deleteComment(postId, _id)}
              >
                <DeleteForeverIcon color="secondary" />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.userRoot.user,
});

export default connect(mapStateToProps, { deleteComment })(
  SingleComment
);
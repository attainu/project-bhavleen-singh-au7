import React, { Fragment, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Card from "../components/MainCards";
import { connect } from "react-redux";
import { setPublicPosts } from "../redux/actions/postActions";
import { Redirect } from "react-router-dom";
import PlaceholderImage from "../images/profile.jpg";

const Dashboard = ({ posts, setPosts, isAuth }) => {
  useEffect(() => {
    setPosts();
  }, []);

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <Grid container direction="row">
        <Grid item md={3} sm={2} xs={1}></Grid>
        <Grid item md={6} sm={8} xs={10}>
          {console.log(posts)}
          {posts &&
            posts.map((post) => (
              <Card
                key={post._id}
                avatar={post.owner.avatar}
                title={post.owner.name}
                username={post.owner.username}
                image={
                  post.image.imageUrl
                    ? post.image.imageUrl
                    : PlaceholderImage
                }
                caption={post.caption}
                likes={post.likes.length}
                commentsLength={post.comments.length}
                comments={post.comments}
              />
            ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.postRoot.posts,
    isAuth: state.userRoot.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPosts: () => {
      dispatch(setPublicPosts());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

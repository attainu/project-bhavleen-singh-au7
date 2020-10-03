import React, { Fragment, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Card from "../components/MainCards";
import { connect } from "react-redux";
import { setPublicPosts } from "../redux/actions/postActions";
import { Redirect } from "react-router-dom";

const Dashboard = ({ posts, setPosts, isAuth }) => {
  useEffect(() => {
    setPosts();
  }, []);

  console.log(posts);

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <Grid container direction="row">
        <Grid item md={3} sm={2} xs={1}></Grid>
        <Grid item md={6} sm={8} xs={10}>
          {posts &&
            posts.map((post) => (
              <Card
                key={post._id}
                avatar={"XX"}
                title={post.owner.username}
                date={Date.now()}
                image={post.image.imageUrl}
                caption={post.caption}
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

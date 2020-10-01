import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import Card from "../components/MainCards";
import image from "../images/gallery.jpg";

const Dashboard = () => {
  return (
    <Fragment>
      <Grid container direction="row">
        <Grid item sm={4}></Grid>
        <Grid item sm={4}>
          <Card
            avatar="KN"
            title="NegiAu7"
            date={Date.now()}
            image={image}
            caption="This is the super awesome post by user"
            comments="Comment Number 1"
          />
          <Card
            avatar="SS"
            title="SinghAu7"
            date={Date.now()}
            image={image}
            caption="My God what a post"
            comments="Comment Number 1"
          />
          <Card
            avatar="Author"
            title="Admin"
            date={Date.now()}
            image={image}
            caption="Ahem! Ahem! Admin Here"
            comments="Comment Number 1"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Dashboard;

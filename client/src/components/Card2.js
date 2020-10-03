import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Image from "material-ui-image";
import { HoverMode } from "react-particles-js";
import { LinearScale } from "@material-ui/icons";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import {
  GridList,
  GridListTile,
  Dialog,
  IconButton,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 0,
    margin: "10px",
    position: "relative",
  },
});

export default function ImgMediaCard({ post }) {
  const classes = useStyles();

  return (
    // <Paper className={classes.root} elevation={3}>
    //   <Image
    //     className="photoEffects"
    //     src={post.image.imageUrl}
    //     alt="UserImages"
    //   />
    // </Paper>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={post.image.imageUrl}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
}

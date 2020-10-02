import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 0,
    margin: "10px"
  },
});

export default function ImgMediaCard({ post }) {
  const classes = useStyles();

  return (
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

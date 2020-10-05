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
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddCommentIcon from "@material-ui/icons/AddComment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderTwoToneIcon from "@material-ui/icons/FavoriteBorderTwoTone";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ReactImageAppear from "react-image-appear";
import LoaderImage from "../images/placeholder.gif";
import DeleteDialog from "../components/DeleteDialog";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "100vw",
    margin: "5%",
  },
  media: {
    paddingTop: "56.25%",
    height: 0,
  },
  avatar: {
    backgroundColor: "red",
  },
}));

const MainCards = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpenDialog = () => {
    console.log("hello");
    return <DeleteDialog />;
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
            <Fragment>
              <IconButton onClick={handleClick}>
                <MoreHorizIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClickOpenDialog}>
                  {"Delete"}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {"Close"}
                </MenuItem>
              </Menu>
            </Fragment>
          }
          title={<strong>{props.name}</strong>}
          subheader={props.username}
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
            <Badge
              badgeContent={props.likes}
              color="primary"
            >
              <FavoriteBorderTwoToneIcon />
            </Badge>
            {/* <FavoriteOutlinedIcon color="secondary" /> */}
          </IconButton>
          <IconButton onClick={handleExpandClick}>
            <Badge
              badgeContent={props.commentLength}
              color="primary"
            >
              <AddCommentIcon />
            </Badge>
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
              {/* {props.comments} */}
              My Comments goes here.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Fragment>
  );
};

export default MainCards;

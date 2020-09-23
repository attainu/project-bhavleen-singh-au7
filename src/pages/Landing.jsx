import React, { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarousalPic1 from "../images/1.jpg";
import CarousalPic2 from "../images/2.jpg";
import CarousalPic3 from "../images/3.jpg";
import CarousalPic4 from "../images/4.jpg";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Nav: {
    position: "absolute",
    color: "#fff",
    "& .MuiButton-label": {
      color: "#fff",
      padding: "6px 10px",
      fontWeight: "600",
    },
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Navbar color="transparent" className={classes.Nav} />
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showArrows={false}
        onSwipeMove
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        <div>
          <img
            src={CarousalPic1}
            alt="pic1"
            className="hundred"
          />
        </div>
        <div>
          <img
            src={CarousalPic2}
            alt="pic2"
            className="hundred"
          />
        </div>
        <div>
          <img
            src={CarousalPic3}
            alt="pic3"
            className="hundred"
          />
        </div>
        <div>
          <img
            src={CarousalPic4}
            alt="pic4"
            className="hundred"
          />
        </div>
      </Carousel>
    </Fragment>
  );
};

export default Landing;

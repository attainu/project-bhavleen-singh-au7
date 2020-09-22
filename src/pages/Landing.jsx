import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarousalPic1 from "../images/1.jpg";
import CarousalPic2 from "../images/2.jpg";
import CarousalPic3 from "../images/3.jpg";
import CarousalPic4 from "../images/4.jpg";

const Landing = () => {
  const pics = [
    {
      pic: CarousalPic1,
    },
    {
      pic: CarousalPic2,
    },
    {
      pic: CarousalPic3,
    },
    {
      pic: CarousalPic4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    className: "slides",
  };

  return (
    <div>
      <Slider {...settings}>
        <img src={CarousalPic1} alt="pic1" height="50%" />
        <img src={CarousalPic2} alt="pic2" height="50%" />
        <img src={CarousalPic3} alt="pic3" height="50%" />
        <img src={CarousalPic4} alt="pic4" height="50%" />
        {/* {pics.map((photo) => {
          return <img src={photo.pic} width="95vw" />;
        })} */}
      </Slider>
    </div>
  );
};

export default Landing;

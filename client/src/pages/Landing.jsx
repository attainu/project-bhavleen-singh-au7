import React, { Fragment } from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import Particles from "react-particles-js";

const useStyles = makeStyles(() => ({
  title: {
    fontFamily: "Pacifico",
    letterSpacing: "3px",
    color: "Crimson",
  },
  subtitle: {
    color: "Maroon",
    marginBottom: "3rem",
    WebkitTextStrokeWidth: "0.3px",
    WebkitTextStrokeColor: "white",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  particlesCanva: {
    position: "absolute",
    opacity: "0.3",
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Particles
        height="90%"
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 65,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "black",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 6,
                size_min: 0.1,
                sync: true,
              },
            },
            color: {
              value: "#000",
            },
          },
        }}
      />
      <Box className={classes.typedContainer}>
        <Typography
          className={classes.subtitle}
          variant="h4"
        >
          <Typed
            strings={[
              "Welcome to Next Gen Photographer's Web App",
            ]}
            typeSpeed={40}
          />
        </Typography>
        <br />
        <Typography className={classes.title} variant="h2">
          PicHub
        </Typography>
        <br />
        <Typography
          className={classes.subtitle}
          variant="h5"
        >
          <Typed
            strings={[
              "Awesome Line 1",
              "Great Line with big length 2",
              "Awesome and Great Line with moderate length 3",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Landing;

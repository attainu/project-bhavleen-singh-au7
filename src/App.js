import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer />
      <Routes />
      <CssBaseline />
    </BrowserRouter>
  );
};

export default App;

import { CssBaseline } from "@material-ui/core";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

import Routes from "./Routes";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      <CssBaseline />
    </BrowserRouter>
  );
};

export default App;

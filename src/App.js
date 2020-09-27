import React, { Fragment, useState } from "react";
import {
  createMuiTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.min.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const handleChange = () => {
    setDarkMode(!darkMode);
    // localStorage.setItem("isDarkMode", darkMode);
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Paper>
          <BrowserRouter>
            <Navbar
              checked={darkMode}
              onChange={handleChange}
            />
            <ToastContainer />
            <Routes />
            <CssBaseline />
          </BrowserRouter>
        </Paper>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;

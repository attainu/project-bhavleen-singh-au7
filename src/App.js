import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
            <CssBaseline />
        </BrowserRouter>
    );
};

export default App;

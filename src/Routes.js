import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import About from "./pages/About";
import AccountActivation from "./pages/AccountActivation";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          // path="/auth/activate/:token"
          path="/auth/activate"
          component={AccountActivation}
        />
        {/* Route when user click on forget password */}
        <Route
          exact
          path="/forget-password"
          component={ForgetPassword}
        />
        <Route
          exact
          // path="/auth/password/reset/:token"
          path="/auth/password/reset"
          component={ResetPassword}
        />
      </Switch>
    </Fragment>
  );
};

export default Routes;

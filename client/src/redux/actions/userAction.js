import axios from "axios";
import setAuthToken from "../helper/setAuthToken";
import jwt_decode from "jwt-decode";

export const userLoginHelper = (data) => {
  return {
    type: "SET_USERS_DATA",
    payload: data,
  };
};

const signupLoaderFlagHelper = (data) => {
  return {
    type: "SET_SIGNUP_LOADER",
    payload: data,
  };
};

// ************************************************
// Route Caller Function
// ************************************************

export const userSignup = (userCredentials, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "http://localhost:5000/api/signup",
        data: userCredentials,
      });
      dispatch(signupLoaderFlagHelper(true));

      // Redirects after 3 Seconds
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    } catch (err) {
      dispatch({
        type: "SET_SIGNUP_ERRORS",
        payload: err.response.data,
      });
      console.log(
        "Error in userSignup Action",
        err.message
      );
    }
  };
};

export const userLogin = (
  userLoginCredentials,
  history
) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: "http://localhost:5000/api/auth",
        data: userLoginCredentials,
      });

      const { token } = data;
      localStorage.setItem("userJwtToken", token);

      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(userLoginHelper(decoded.user));
      // history.push("/dashboard");
    } catch (err) {
      dispatch({
        type: "SET_LOGIN_ERRORS",
        payload: err.response.data,
      });
      console.log("Error in userLogin Action", err.message);
    }
  };
};

import { combineReducers } from "redux";
import userReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    userRoot: userReducer,
    errorRoot: errorReducer,
});

import { combineReducers } from "redux";
import userReducer from "./authReducer";
import errorReducer from "./errorReducer";
import postReducer from './postReducer';
import profileReducer from "./profileReducer";

export default combineReducers({
    userRoot: userReducer,
    profileRoot: profileReducer,
    errorRoot: errorReducer,
    postRoot: postReducer
});

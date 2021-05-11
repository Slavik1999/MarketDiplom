import { combineReducers } from "redux";
// import registrationReducer from "./registration-reducers/registration";
import loaderReducer from "./loader-reducer/loader";

const rootReducer = combineReducers({
    loader: loaderReducer,
});

export default rootReducer;

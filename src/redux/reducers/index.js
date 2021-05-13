import { combineReducers } from "redux";
import authReducer from "./registration-reducers/registration";

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import authReducer from "./registration-reducers/registration";
import auctionsReducer from "./auction-reducers/auctions";

const rootReducer = combineReducers({
    auth: authReducer,
    auctions: auctionsReducer,
});

export default rootReducer;

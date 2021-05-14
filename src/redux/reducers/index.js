import { combineReducers } from "redux";
import authReducer from "./registration-reducers/registration";
import auctionReducer from "./auction-reducers/auction";

const rootReducer = combineReducers({
    auth: authReducer,
    auctions: auctionReducer,
});

export default rootReducer;

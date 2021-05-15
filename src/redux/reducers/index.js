import { combineReducers } from "redux";
import authReducer from "./registration-reducers/registration";
import auctionReducer from "./auction-reducers/auction";
import productReducer from "./product-reducer/product-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    auctions: auctionReducer,
    products: productReducer
});

export default rootReducer;

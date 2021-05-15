import { combineReducers } from "redux";
import authReducer from "./registration-reducers/registration";
import auctionsReducer from "./auction-reducers/auctions";
import productReducer from "./product-reducer/product-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    auctions: auctionsReducer,
    products: productReducer
});

export default rootReducer;

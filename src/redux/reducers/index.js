import { combineReducers } from "redux";
import authReducer from "./registration-reducers/registration";
import auctionReducer from "./auction-reducers/auction";
import productReducer from "./product-reducer/product-reducer";
import basketReducer from "./basket-reducer/basket-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    auctions: auctionReducer,
    products: productReducer,
    basket: basketReducer

});

export default rootReducer;

import { combineReducers } from "redux";
import authReducer from "./registration-reducers/registration";
import auctionsReducer from "./auction-reducers/auctions";
import productReducer from "./product-reducer/product-reducer";
import basketReducer from "./basket-reducer/basket-reducer";
import productsReducer from './products-reducer/products-reducet'
import ordersReducer from './orders-reducer/orders-reducer'
import profileReducer from './profile-reducer/profiel-reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    auctions: auctionsReducer,
    products: productReducer,
    basket: basketReducer,
    userProducts: productsReducer,
    orders: ordersReducer,
    profile: profileReducer
});

export default rootReducer;

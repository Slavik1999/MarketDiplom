// import H from "history";
import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from '../constants/basket'

export const addToBasket = function (product) {

    return {
        type:ADD_TO_BASKET,
        payload: product
    };
};

export const removeFromBasket = function (productId) {

    return {
        type:REMOVE_FROM_BASKET,
        payload: productId
    };
};

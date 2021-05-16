import { FETCH_PRODUCTS } from '../constants/products'

export const fetchProducts = function () {

    return {
        type:FETCH_PRODUCTS,
    };
};
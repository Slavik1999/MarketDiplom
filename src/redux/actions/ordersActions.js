import { SEND_ORDER, FETCH_ORDERS } from '../constants/orders'

export const sendOrder = function (order) {

    return {
        type: SEND_ORDER,
        payload: order
    };
};

export const fetchOrders = function () {

    return {
        type: FETCH_ORDERS,
    };
};
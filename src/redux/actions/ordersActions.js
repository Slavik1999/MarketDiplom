import { SEND_ORDER } from '../constants/orders'

export const sendOrder = function (order) {

    return {
        type: SEND_ORDER,
        payload: order
    };
};

import { SEND_ORDER_SUCCESS, SEND_ORDER_FAIL } from '../../constants/orders'

const initialState = {
    orders: [],
    errorMessage: ''
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_ORDER_SUCCESS:
            const newSendOrder = state.orders.concat();
            newSendOrder.push(action.payload);
            return {
                ...state,
                orders: newSendOrder,
            };
        case SEND_ORDER_FAIL:
            return {
                ...state,
                errorMessage: action.payload,
            }; 
        default:
            return state;
    }
};

export default ordersReducer;

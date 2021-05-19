import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAIL} from '../../constants/products'

const initialState = {
    products: [],
    errorMessage: ''
};

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
            };
        case FETCH_PRODUCTS_FAIL:
            return {
                ...state,
                errorMessage:  action.payload,
            };
        default:
            return state;
    }
};

export default loaderReducer;

import {GET_ALL_AUCTION_REQ, GET_ALL_AUCTION_SUCCESS, GET_ALL_AUCTION_FAILED} from "../../constants/auction";

const initialState = {
    auctions: [],
    error: '',
    loading: false
};

const auctionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_AUCTION_REQ:
            return {...state, loading: false}
        case GET_ALL_AUCTION_SUCCESS:
            return {
                ...state,
                loading: false,
                auctions: action.payload
            }
        case GET_ALL_AUCTION_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default auctionReducer;

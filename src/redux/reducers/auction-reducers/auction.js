import {GET_ALL_AUCTION_REQ, GET_ALL_AUCTION_SUCCESS, GET_ALL_AUCTION_FAILED} from "../../constants/auction";

const initialState = {
    auctions: [],
    error: '',
    loading: false
};

const auctionReducer = (state = initialState, action) => {
    console.log('auctionReducer')
    switch (action.type) {
        case GET_ALL_AUCTION_REQ:
            console.log('auctionReducer req')
            return {...state, loading: false}
        case GET_ALL_AUCTION_SUCCESS:
            console.log('auctionReducer success')
            return {
                ...state,
                loading: false,
                auctions: action.payload
            }
        case GET_ALL_AUCTION_FAILED:
            console.log('auctionReducer failed')
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

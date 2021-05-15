// import H from "history";
import {GET_ALL_AUCTION_REQ, GET_ALL_AUCTION_SUCCESS, GET_ALL_AUCTION_FAILED} from '../constants/auctions'


export const getAllAuctions = function () {
    return {
        type: GET_ALL_AUCTION_REQ,
    }
}

export const getAllAuctionSuccess = function (auctions) {
    console.log('getAllAuctionSuccess')
    console.log(auctions)
    return {
        type:GET_ALL_AUCTION_SUCCESS,
        payload: auctions,
    };
};

export const getAllAuctionFail = function (error) {

    return {
        type:GET_ALL_AUCTION_FAILED,
        payload: error,
    };
};


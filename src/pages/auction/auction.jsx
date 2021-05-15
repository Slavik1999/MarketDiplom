import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {auctionReq, auctionClear} from "../../redux/actions/auctionsAction";
import {useParams} from "react-router";

const Auction = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const storeAuction = useSelector((store) => store.auctions.auction);
    useEffect(() => {
        console.log(storeAuction)
        if(!storeAuction){
            console.log(params.id)
            dispatch(auctionReq(params.id))
        }
        if(storeAuction && storeAuction.id !== +params.id){
            dispatch(auctionClear());
            dispatch(auctionReq(params.id))
        }
    }, [dispatch, params, storeAuction])

    return (
        <div>
            {storeAuction}
        </div>
    );
};

export default Auction;

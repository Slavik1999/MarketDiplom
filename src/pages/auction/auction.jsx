import {
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText, ListItemSecondaryAction, Link, IconButton, Divider
} from '@material-ui/core';
import {Component, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ViewIcon from '@material-ui/icons/Visibility'
import {useHistory} from 'react-router';
import {getAllAuctions, getAllAuctionSuccess, getAllAuctionFail} from '../../redux/actions/auctionAction';
import {BASE_URL} from "../../constants/constants";
import {NavLink} from "react-router-dom";

const calculateTimeLeft = (date) => {
    const difference = date - new Date()
    let timeLeft = {}
    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            timeEnd: false
        }
    } else {
        timeLeft = {timeEnd: true}
    }
    return timeLeft
}


export default function Auction() {
    const currentDate = new Date()

    const showTimeLeft = (date) => {
        let timeLeft = calculateTimeLeft(date)
        return !timeLeft.timeEnd && <span>
      {timeLeft.days != 0 && `${timeLeft.days} d `}
            {timeLeft.hours != 0 && `${timeLeft.hours} h `}
            {timeLeft.minutes != 0 && `${timeLeft.minutes} m `}
            {timeLeft.seconds != 0 && `${timeLeft.seconds} s`} left
    </span>
    }
    const auctionState = (auction)=>{
        return (
            <span>
          {currentDate < new Date(auction.bidStart) && `Auction Starts at ${new Date(auction.bidStart).toLocaleString()}`}
                {currentDate > new Date(auction.bidStart) && currentDate < new Date(auction.bidEnd) && <>{`Auction is live | ${auction.bids?.length || 0} bids |`} {showTimeLeft(new Date(auction.bidEnd))}</>}
                {currentDate > new Date(auction.bidEnd) && `Auction Ended | ${auction.bids?.length || 0} bids `}
                {currentDate > new Date(auction.bidStart) && auction.bids?.length> 0 && ` | Last bid: $ ${auction.bids[0].bid}`}
      </span>
        )
    }

    const history = useHistory();
    const dispatch = useDispatch();
    const auctionStoreError = useSelector((store) => store.auctions.error);
    const auctions = useSelector((store) => store.auctions.auctions);
    console.log({auctions})
    useEffect(() => {
        dispatch(getAllAuctions());
    }, [])

    return (
        <List dense >
            {auctions.map((auction, i) => {
                return <span key={i}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar variant='square' src={BASE_URL + auction.photo}/>
                </ListItemAvatar>
                <ListItemText primary={auction.name} secondary={auctionState(auction)}/>
                <ListItemSecondaryAction>
                    <NavLink to={"/auction/" + auction.id}>
                      <IconButton aria-label="View" color="primary">
                        <ViewIcon/>
                      </IconButton>
                    </NavLink>
                    {/*{ auth.isAuthenticated().user && auth.isAuthenticated().user._id == auction.seller._id &&
                    <>
                        <Link to={"/auction/edit/" + auction._id}>
                            <IconButton aria-label="Edit" color="primary">
                                <Edit/>
                            </IconButton>
                        </Link>
                        <DeleteAuction auction={auction} onRemove={props.removeAuction}/>
                    </>
                    }*/}
                </ListItemSecondaryAction>
              </ListItem>
              <Divider/>
            </span>
            })}
        </List>
    )
}

import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";
import {ENDPOINT} from "../../constants/constants";
import {Button} from "@material-ui/core";

const socket = socketIOClient(ENDPOINT);

function AuctionBid() {
    const [response, setResponse] = useState("");
    useEffect(() => {
        socket.emit('joinedRoom', {room: 1})
        return () => {
            socket.emit('leftRoom', {
                room: 1
            })
        }
    }, [])
    useEffect(() => {
        socket.on('newBid', payload => {
            console.log(payload)
        })
        return () => {
            socket.off('newBid')
        }
    })

    onclick = () =>{
        console.log('Clcik')
        socket.emit('newBid',{sender:'big', room: 1, message: 'sdk'})
    }


    return (
        <div>
            <p>
                It's {response}
            </p>
            <Button onClick={onclick}>
                Click
            </Button>
        </div>
    );
}

export default AuctionBid;

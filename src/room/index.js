import React from 'react';
import {useParams} from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';

const Roompage = () =>{
    const {roomId} = useParams();

    const myMeeting = async (element) => {
        const appID = 1315541933;
        const serverSecret = "302603b11722234278924b14ed573607";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            'username'
            );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario:{
                mode: ZegoUIKitPrebuilt.VideoConference,
            }
        })
    }
    return (
        <div className="room-page">
            <div ref={myMeeting}/>
        </div>
    )
}

export default Roompage;
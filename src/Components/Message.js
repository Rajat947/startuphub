import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Message.css';

function Message(props){
    let side;
    if(props.sender === '1'){side="left"}
    else{side="right"}
    return(
        <>
            <div className={side}>{props.message}</div>
        </>
    )
}

export default Message;
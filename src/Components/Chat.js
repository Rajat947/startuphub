import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chat.css';
import Searchbar from './Searchbar';
import user from "../Img/user.png";
import Message from "./Message";

class Chat extends Component{
    render()
    {
        return(
            <div className="container-fluid Home">
                <div className="row searchbar"> <Searchbar></Searchbar> </div>
                <div className="row chat justify-content-between">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4 chat-heading">
                                <p>Messages</p>
                            </div>
                            <div className="col-8 chat-heading">
                                <div className="user">
                                    <img src={user} alt="user"></img>
                                </div>
                                <p>Mr. Lucifer Morningstar</p>
                            </div>
                        </div>
                        <div className="row chat-content">
                            <div className="col-4">
                                <div className="row contacts">
                                    <div className="user">
                                        <img src={user} alt="user"></img>
                                    </div>
                                    <p className="user-name">Mr. Lucifer Morningstar</p>
                                </div>
                            </div>
                            <div className="col-8 Chat-Messages container-fluid">
                                <div className="row user-Messages container-fluid">
                                    <div className="row text"><Message sender="1" message="Hi there"></Message></div>
                                    <div className="row text"><Message sender="0" message="Hi, do I know you?"></Message></div>
                                    <div className="row text"><Message sender="1" message="No you don't, I got your number from my employee"></Message></div>
                                    <div className="row text"><Message sender="0" message="okay ??"></Message></div>
                                    <div className="row text"><Message sender="1" message="I saw your previous websites, you are great developer."></Message></div>
                                    <div className="row text"><Message sender="1" message="Can you make one for me??"></Message></div>
                                    <div className="row text"><Message sender="0" message="Thanks and yeah sure I can."></Message></div>
                                    <div className="row text"><Message sender="1" message="Great...I will get back to you with my requirements"></Message></div>
                                </div>
                                <div className="row type-message">
                                    <input type="text" className="type-message"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat;
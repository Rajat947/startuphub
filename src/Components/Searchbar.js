import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Searchbar.css';
import Home from "../Img/Home.svg"
import Message from "../Img/Message.svg"
import profile from "../Img/Profile.png"
import Search from "./Search"

function activateLink(event){
    console.log(`${event.target.id}-btn`)
    document.getElementById(`${event.target.id}-btn`).click();
}

function Searchbar(){
    return(
        <div className="container-fluid Searchbar">
            <div className="row align-items-center bar">
                <div className="col-1 Logo"></div>
                <div className="col-4 search">
                    <Search></Search>
                </div>
                <div className="col-4"></div>
                <div className="col-3 navigation container-fluid">
                    <div className="row bar justify-content-end">
                        <div className="col-3 nav-icons">
                            <img id="Home" className="icon active" src={Home} alt="" onClick={activateLink}></img>
                        </div>
                        <div className="col-3 nav-icons">
                            <img id="Message" className="icon" src={Message} alt="" onClick={activateLink}></img>
                        </div>
                        <div className="col-3 nav-icons">
                            <img id="Profile" className="icon" src={profile} alt=""  onClick={activateLink}></img>
                        </div>
                        <Link id="Home-btn" className="hidden" to="/home/feed"></Link>
                        <Link id="Message-btn" className="hidden" to="/home/chat"></Link>
                        <Link id="Profile-btn" className="hidden" to="/home/profile"></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar;
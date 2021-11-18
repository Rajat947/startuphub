import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';
import logo from "../Img/Startuphub1.png"
import manIll from "../Img/manIll.svg"
import bubble from "../Img/Bubble.svg"

function Landing() {
    return (
        <div className="LandingPage ">
            <div className="main-container container-fluid">
                <div className="row">
                <div className="col-8 left-side container-fluid">
                    <div className="row">
                        <img className="logo" src={logo} alt="Startup Hub"></img>
                    </div>
                    <div className="row">
                        <p className="main-text">Have a business idea, a potential product or looking for <br></br>networking and funding? Tap on Get Started and <br></br> Begin your Journey!!</p>
                    </div>
                    <div className="row proceed">
                    {/* <p className"startbutton"><Link to="/signup">Get Started</Link></p> */}
                        <Link className="startbutton" to="/signup">Get Started</Link>
                        <div className="SignInButton">Already Registerd ? <Link to="/signin">Sign In</Link> </div>
                    </div>
                </div>
                <div className="col-4 right-side">
                    <img id="manill" src={manIll} alt="Illustration"></img>
                    <img id="bubble" src={bubble} alt="Illustration"></img>
                </div>
                </div>
            </div>
            <div className="footer">
                <ul>
                    <li><a href="/help">Help</a></li>
                    <li><a href="/Terms">Terms and Services</a></li>
                    <li><a href="/AboutUs">About-Us</a></li>
                    <li><a href="/Support">Support</a></li>
                    <li>&copy; STARTUP HUB</li>
                </ul>
            </div>
        </div>
    );
  }
  
  export default Landing;
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import startup from "../Img/startup.png"
import investor from "../Img/Investor.png"

function Register() {
    return (
        <div className="Register container-fluid">
            <div className="row">
                <h1>REGISTER AS</h1>
            </div>
            <div className="row justify-content-around tabs">
                <div className="col-4">
                    <div className="Image">
                        <img id="investor" src={investor} alt=""></img>
                    </div>
                    <Link to="/signup/investor" className="Button">INVESTOR</Link>
                </div>
                <div className="col-4">
                    <div className="Image">
                        <img src={startup} alt=""></img>
                    </div>
                    <Link to="/signup/startup" className="Button">STARTUP</Link>
                </div>
            </div>
        </div>
    );
  }
  
  export default Register;
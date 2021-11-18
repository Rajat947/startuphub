import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import logo from "../Img/Startuphub3.png"
import Form from './Form'


function SignIn() {
    return (
        <div className="SignIn container-fluid">
            <div className="row">
                <div className="col-6 Illustration "></div>
                <div className="col-6 signInForm">
                    <div className="container-fluid Form">
                        <div className="row justify-content-center">
                            <img src={logo} alt="logo"></img>
                        </div>
                        <div className="row">
                            <Form></Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default SignIn;
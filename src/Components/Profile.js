import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import Searchbar from './Searchbar';
 
function Chat(){
    return(
        <div className="container-fluid">
            <div className="row searchbar"> <Searchbar></Searchbar> </div>
            <div className="row Profile container-fluid">
                <div className="row">
                    <div className="backgroundImage"></div>
                </div>
                <div className="row">
                    <div className="col-2 personal user-image"></div>
                    <div className="col-4 personal Profile-user-name">
                        <h2>Rajat Choudhary</h2>
                        <p>Admin@StartupHub<br></br>Student at DTU</p>
                    </div>
                </div>
                <div className="row">
                    <div className="about">
                        <h2>ABOUT</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;
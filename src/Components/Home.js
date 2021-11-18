import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Searchbar from './Searchbar';
import Feed from './Feed';

function Home(){
    return(
        <div className="container-fluid Home-Feed">
            <div className="row searchbar"> <Searchbar></Searchbar> </div>
            <div className="row content justify-content-between">
                <Feed></Feed>
            </div>
        </div>
    )
}
export default Home;
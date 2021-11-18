import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Feed.css';
import Filter from './FIlter';
import User from './User';
const list =  [{
    name: "Service St.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["startup","service based"]
},
{
    name: "Product St.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["startup","product based"]
},
{
    name: "EdTech St.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["startup","ed-tech"]
},
{
    name: "Household St.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["startup", "house hold"]
},
{
    name: "IOT st.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["startup", "iot"]
},
{
    name: "Healthcare St.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["startup", "healthcare"]
},
{
    name: "Fintech St.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["startup","fintech"]
},
{
    name: "ConsGoods St.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["startup","consumer goods"]
},
{
    name: "B2B St.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["startup","b2b services"]
},
{
    name: "Service Inv.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["investor","service based"]
},
{
    name: "Product Inv.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["investor","product based"]
},
{
    name: "EdTech Inv.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["investor", "ed-tech"]
},
{
    name: "Household Inv.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["investor", "house hold"]
},{
    name: "IOT Inv.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["investor", "iot"]
},{
    name: "Healthcare Inv.",
    userType: "investor",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["investor", "healthcare"]
},
{
    name: "Fintech Inv.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["investor","fintech"]
},
{
    name: "ConGoods Inv.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["investor","consumer goods"]
},
{
    name: "B2B Inv.",
    location: "Delhi",
    summary: "lorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsum",
    AOI: ["investor","b2b services"]
}]
class Feed extends Component {
    constructor(props){
        super(props)
        this.list = list
        this.state = {
            filters: []
        }
    }
    onChange = (event)=>{
        if(event.target.checked){
            let newFilters = this.state.filters;
            newFilters.push(event.target.id);
            this.setState({
                filters: newFilters
            },()=>{
                console.log(this.state.filters);
            })
        }else{
            let newFilters = this.state.filters.map((ele)=>{
                if(ele !== event.target.id){
                    return ele;
                }else{
                    return '';
                }
            });
            this.setState({
                filters: newFilters
            },()=>{
                console.log(this.state.filters);
            })
        }
    }
    fullfeed=(user)=>{
        // console.log(user);
        let satisfy = true;
        for(let i=0; i<this.state.filters.length; i++)
        {
            let filter = this.state.filters[i].toLowerCase();
            if(filter === '') continue;
            // console.log(filter);
            let found = false;
            for(let j=0; j<user.AOI.length; j++)
            {
                // console.log(user.AOI[j])
                if(filter === user.AOI[j]){
                    found = true;
                    break;
                }
            }
            if(found === false){
                satisfy=false;
                break;
            }
        }
        if(satisfy){
            // console.log("Accpeted");
            return(<User ele={user}></User>)
        }else{
            // console.log("Not Accpeted");
            return(<></>)
        }
    }
    render() {
        return (
            <>
                <div className="sidebar">
                    <Filter name="Startup" type="checkbox" execute={this.onChange}></Filter>
                    <Filter name="Investor" type="checkbox" execute={this.onChange}></Filter>
                    <p className="Filter-text">Area of Interest</p>
                    <Filter name="Service Based" type="checkbox" execute={this.onChange}></Filter>
                    <Filter name="Product Based" type="checkbox" execute={this.onChange}></Filter>
                    <Filter name="Ed-tech" type="checkbox" execute={this.onChange}></Filter>
                    <Filter name="House Hold" type="checkbox" execute={this.onChange}></Filter>
                    <Filter name="IOT" type="checkbox" execute={this.onChange}></Filter>
                    <Filter name="Healthcare" type="checkbox" execute={this.onChange}></Filter>
                    <Filter name="Fintech" type="checkbox" execute={this.onChange}></Filter>
                    <Filter name="Consumer Goods" type="checkbox" execute={this.onChange}></Filter>
                    <Filter name="B2B Services" type="checkbox" execute={this.onChange}></Filter>
                </div>
                <div className="main container-fluid">
                    <div className="row row-cols-auto">
                        {this.list.map(this.fullfeed)}
                    </div>
                </div>
            </>
        )
    }
}

export default Feed
import React from 'react'
import './Filter.css'


function Filter(props) {
    if(props.type === "text"){
        return (
            <div className = "Filter">
                <label for={props.name}>{props.name}</label>
                <input type={props.type} value={props.name} id={props.name} onChange={props.execute}></input>
            </div>
        )
    }else{
        return (
            <div className = "Filter">
                <input type={props.type} value={props.name} id={props.name} onChange={props.execute}></input>
                <label for={props.name}>{props.name}</label>            
            </div>
        )
    }
}
export default Filter;
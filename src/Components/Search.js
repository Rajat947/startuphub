import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css';
import searchIcon from "../Img/searchIcon.svg"

class Search extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            value: 'Seach ...'
        }
        this.inputRef = React.createRef();
        this.textRef = React.createRef();
    }
    HandleChange = (event)=>{
        this.setState({
            value: event.target.value
        },()=>{console.log(`Value: ${this.state.value}`)})
    }
    Focus = ()=>{
        let element = this.inputRef.current;
        if(document.activeElement === element){
            this.textRef.current.style.display = "none";
        }
        else if(element.value === ''){
            this.textRef.current.style.display = "block";
        }
    }
    render()
    {
        return(
            <div id="Search">
                <input id="search-bar" type="text" ref={this.inputRef} onChange={this.HandleChange} onFocus={this.Focus} onBlur={this.Focus}></input>
                <img id="searchIcon" src={searchIcon} alt=""></img>
                <p id="seach-text" ref={this.textRef}>Seach...</p>
            </div>
        )
    }
}
export default Search;
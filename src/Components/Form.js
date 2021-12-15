import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './Form.css'

class Form extends Component{
    constructor(props)
    {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
        this.errorRef = React.createRef();
        this.submitRef = React.createRef();
    }
    toggleDisabledButton = ()=>{
        if(this.state.email !== "" && this.state.password !== "")
        {
            this.submitRef.current.classList.remove("disabled");
            this.submitRef.current.classList.add("effect");
        }
        else if(this.submitRef.current.classList.contains("disabled") === false){
            this.submitRef.current.classList.add("disabled");
            this.submitRef.current.classList.remove("effect");
        }
    }
    changed = (event)=>{
        let element = event.target.className;
        switch(element)
        {
            case "email":
            {
                this.setState({
                    email: event.target.value,
                }, this.toggleDisabledButton)
                break;
            }
            case "password":
            {
                this.setState({
                    password: event.target.value
                }, this.toggleDisabledButton)
                break;
            }
            default: break;
        }
        console.log(`email: ${this.state.email} and password: ${this.state.password}`);
        this.errorRef.current.style.visibility = "hidden";
    }
    submit = (event)=>{
        event.preventDefault();
        if(!this.submitRef.current.classList.contains("disabled")){
            //Dummy id and password
            if(this.state.email !== "admin@startuphub.co.in" && this.state.password !== "12345678")
            {
                this.errorRef.current.style.visibility = "visible";
                this.setState({
                    email: '',
                    password: ''
                },this.toggleDisabledButton)
            }
            else{
                document.getElementById("gotohome").click();
            }
        }
    }
    render()
    {
        return(
            <form>
                <div className="error" ref={this.errorRef}>*Email or Password is incorrect. Try Again*</div>
                <div>
                    <label>Email - Id  </label>
                    <input className="email" type="text" value={this.state.email} onChange={this.changed}></input>
                </div>
                <div>
                    <label>Password </label>
                    <input className="password"  type="password" value={this.state.password} onChange={this.changed}></input>
                </div>
                <button className="submit-button disabled" onClick={this.submit} ref={this.submitRef}>LOGIN</button>
                <Link id="gotohome" to="/Home/feed"></Link>
            </form>
        )
    }
}
export default Form;
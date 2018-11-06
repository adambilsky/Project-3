import React from "react";
import './login.css';
import axios from 'axios';

//const ReactCSSTG = React.addons.CSSTransitionGroup;

class Login extends React.Component {
    state = {

    }
    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

        console.log(this.state);
    }
    handleSubmit = (event) => {
        alert("submit works");
        const loginInfo = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/authenticate', loginInfo).then( res => {
            console.log(res);
        })
    }


    render(){
        return(
            <div className="login">
                <h2>login</h2>
                <input onChange={this.handleInput} name="email" placeholder="email"/>
                <input onChange={this.handleInput} name="password" placeholder="password"/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default Login;
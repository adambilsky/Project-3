import React, { Component } from "react";
import API from "../../utils/API";
import { Redirect } from 'react-router-dom'

class Search extends Component {
    state = {
        results: [],
        schoolname: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Were are going to call a function with our data from the form
        // this.props.addUser(this.state);
        API.findByName( this.state.schoolName )
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="schoolName">Search:</label>
                    <input type="text" id="schoolName" onChange={this.handleChange} value={this.state.schoolName}/><span><button>Search</button></span>




                </form>
            </div>
        )
    }
}
export default Search;
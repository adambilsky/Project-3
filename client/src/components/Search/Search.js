import React, { Component } from "react";
import API from "../../utils/API";
import { Redirect, Link } from 'react-router-dom'
import { WorkList, ListItem } from "../WorkList";

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
        API.findByName(this.state.schoolName)
            .then(res => this.setState({results: res.data}))
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="schoolName">Search:</label>
                    <input type="text" id="schoolName" onChange={this.handleChange} value={this.state.schoolName} /><span><button>Search</button></span>
                </form>

                <h4>Results:</h4>
                {this.state.results.map(results => (
                    <WorkList>
                        <ListItem key={results._id}>                            
                                <span><b>School: </b><Link to={`/school/${results._id}`}>{results.schoolName}</Link> | <b>City: </b>{results.schoolCity}</span>
                        </ListItem>
                    </WorkList>
                ))}


            </div>
        )
    }
}
export default Search;
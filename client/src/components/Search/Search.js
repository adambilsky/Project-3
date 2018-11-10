import React, { Component } from "react";
import API from "../../utils/API";
import { Redirect, Link } from 'react-router-dom'
import { WorkList, ListItem } from "../WorkList";

class Search extends Component {
    state = {
        results: [],
        schoolname: '',
        schoolId: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSearch = (e) => {
        e.preventDefault();
        // Were are going to call a function with our data from the form
        // this.props.addUser(this.state);
        API.findByName(this.state.schoolName)
            .then(res => this.setState({results: res.data}))
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div >
                <form onSubmit={this.handleSearch}>
                    {/* <label htmlFor="schoolName">Search:</label> */}
                    <input type="text" id="schoolName" onChange={this.handleChange} value={this.state.schoolName} /><span><button>Search</button></span>
                </form>

                <p>Results:</p>
                {this.state.results.map(results => (
                        <ListItem key={results._id}>                            
                            <button 
                            // this is using prop setSchoolId to set addUser schoolId to result._id prop
                                onClick={() => this.props.setSchoolId(results._id)} 
                                value={results._id}>
                                Select
                            </button>
                            <span>
                                <b>School: </b>
                                <Link to={`/school/${results._id}`}>{results.schoolName}</Link> | 
                                <b>City: </b>{results.schoolCity}<br />
                            </span>
                        </ListItem>
                ))}


            </div>
        )
    }
}
export default Search;
import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

// import other style items from components folder
//
//
//
//
//
//


class Schools extends Component {
    // set initial state
    state = {};

    componentDidMount() {
        // call primary load method here
    }

    // declare school "load" (get) method using API promise
    loadSchools = () => {
        API.getSchools()
          .then(res =>
            this.setState({})
          )
          .catch(err => console.log(err));
      };
    
    /* declare other school request methods -

        update?
        delete?
        search filters? */


    // declare input change method


    // declare form submission method


    // setup page rendering

    render () {
        return (
            console.log("The page is currently empty.")
            // page design here

        );
    }
}

// export the Schools class
export default Schools;
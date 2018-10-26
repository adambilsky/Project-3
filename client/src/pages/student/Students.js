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


class Students extends Component {
    // set initial state
    state = {};

    componentDidMount() {
        // call primary load method here
    }

    //  declare student "load" (get) method using API promise
    loadStudents = () => {
        API.getStudents()
            .then(res =>
                this.setState({})
            )
            .catch(err => console.log(err));
    };

    /*  load ONE student by id (from search results?)
        this may need to be in a different spot? */
    loadStudent = id => {
        API.getStudent(id)
            .then(res => this.loadStudent())
            .catch(err => console.log(err));
    };
    /*  declare other student request methods -

        update?
        delete?
        search params? seems we'll need several fields here, 
        unless we become really good component-makers */


    // declare input change method *** ADAPT TO our needs
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    

    // declare form submission method
    handleFormSubmit = event => {
        event.preventDefault();
        if (/* we may need a switch here with various API requests attached? */) {
            API.saveStudent({
                /* not sure how to construct this, maybe req.body,
                or we import the format of the body?
                or list all the fields. Not sure.
                */
            })
                .then(res => this.loadStudents())
                .catch(err => console.log(err));
        };

        // setup page rendering

        render() {
            return (
                console.log("The page is currently empty.")
                // page design here

            );
        };
    }
}
    // export the Students class
    export default Students;
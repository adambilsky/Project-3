import React, { Component } from "react";
import API from "../../utils/API";

// Still need to add to database or state
class AddSchool extends Component {
  state = {
    schoolName: [],
    schoolCity: '',
    adminFirstName: '',
    adminLastName: '',
    adminEmail: '',
    adminPhone: '',
    degree1: '',
    degree2: '',
    degree3: '',
    URL: '',
    bio: ''
  };

  // we target the id of the input which we conviently named the same as our state properties
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  // on submit we grab the state and all its values and pass them to the parent component
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    // Were are going to call a function with our data from the form
    // this.props.addUser(this.state);
    API.saveSchool({
       schoolName: this.state.schoolName,
       schoolCity: this.state.schoolCity,
       adminFirstName: this.state.adminFirstName,
       adminLastName: this.state.adminLastName,
       adminEmail: this.state.adminEmail,
       adminPhone: this.state.adminPhone,
       degree1: this.state.degree1,
       degree2: this.state.degree2,
       degree3: this.state.degree3,
       URL: this.state.URL,
       bio: this.state.bio
    })
      .then(res => console.log("School added!"))
      .catch(err => console.log(err));
      this.setState({
        schoolName: [],
        schoolCity: '',
        adminFirstName: '',
        adminLastName: '',
        adminEmail: '',
        degree1: '',
        degree2: '',
        degree3: '',
        URL: '',
        bio: ''
       });
      };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="userName">School Name:</label>
          <input type="text" id="schoolName" onChange={this.handleChange} value={this.state.schoolName} />
          
          <label htmlFor="city">City:</label>
          <input type="text" id="schoolCity" onChange={this.handleChange} value={this.state.city} />

          <label htmlFor="firstName">Administrator First Name:</label>
          <input type="text" id="adminFirstName" onChange={this.handleChange} value={this.state.adminFirstName} />

          <label htmlFor="lastName">Administrator Last Name:</label>
          <input type="text" id="adminLastName" onChange={this.handleChange} value={this.state.adminLastName} />

          <label htmlFor="schoolName">Administrator e-mail:</label>
          <input type="text" id="adminEmail" onChange={this.handleChange} value={this.state.adminEmail} />

          <label htmlFor="adminPhone">Phone:</label>
          <input type="tel" id="adminPhone" onChange={this.handleChange} value={this.state.adminPhone} />

          <label htmlFor="degree">Primary Degrees Offered:</label>
          <input type="text" id="degree1" onChange={this.handleChange} value={this.state.degree1} />
          <input type="text" id="degree2" onChange={this.handleChange} value={this.state.degree2} />
          <input type="text" id="degree3" onChange={this.handleChange} value={this.state.degree3} />


          <label htmlFor="URL">URL:</label>
          <input type="URL" id="URL" onChange={this.handleChange} value={this.state.URL} />

          <label htmlFor="bio">Bio:</label>
          <input type="text" id="bio" onChange={this.handleChange} value={this.state.bio} />

          <button>Submit</button>

        </form>
      </div>
    )
  }
}
export default AddSchool;


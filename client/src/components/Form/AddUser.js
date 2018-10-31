import React, { Component } from "react";
import API from "../../utils/API";

// Still need to add to database or state
class AddUser extends Component {

  state = {
    student: [],
    userName: "",
    firstName: "",
    lastName: "",
    schoolName: "",
    degree: "",
    concentration: "",
    city: "",
    email: "",
    mobile: "",
    bio: ""
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
    API.saveStudent({
      userName: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      schoolName: this.state.schoolName,
      degree: this.state.degree,
      concentration: this.state.concentration,
      city: this.state.city,
      email: this.state.email,
      mobile: this.state.mobile,
      bio: this.state.bio
    })
      .then(res => console.log("student added!"))
      .catch(err => console.log(err));
  };

  //   this.setState({
  //   userName: '',
  //   firstName: '',
  //   lastName: '',
  //   schoolName: '', 
  //   degree: '', 
  //   concentration: '', 
  //   city: '', 
  //   email: '', 
  //   mobile: '',
  //   bio: ''
  // });

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="userName">Username:</label>
          <input type="text" id="userName" onChange={this.handleChange} value={this.state.userName} />

          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" onChange={this.handleChange} value={this.state.firstName} />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" onChange={this.handleChange} value={this.state.lastName} />

          <label htmlFor="schoolName">School Name:</label>
          <input type="text" id="schoolName" onChange={this.handleChange} value={this.state.schoolName} />

          <label htmlFor="degree">Degree:</label>
          <input type="text" id="degree" onChange={this.handleChange} value={this.state.degree} />

          <label htmlFor="concentration">Concentration:</label>
          <input type="text" id="concentration" onChange={this.handleChange} value={this.state.concentration} />

          <label htmlFor="city">City:</label>
          <input type="text" id="city" onChange={this.handleChange} value={this.state.city} />

          <label htmlFor="email">Email:</label>
          <input type="text" id="email" onChange={this.handleChange} value={this.state.email} />

          <label htmlFor="mobile">mobile:</label>
          <input type="tel" id="mobile" onChange={this.handleChange} value={this.state.mobile} />

          <label htmlFor="bio">Bio:</label>
          <input type="text" id="bio" onChange={this.handleChange} value={this.state.bio} />

          <button>Submit</button>

        </form>
      </div>
    )
  }
}
export default AddUser;


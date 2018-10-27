import React, { Component } from "react";
// Still need to add to database or state
class AddUser extends Component {

  state= { 
    student: [
    {userName: ""},
    {firstName: ""},
    {lastName: ""},
    {schoolName: ""}, 
    {degree: ""}, 
    {concentration: ""}, 
    {city: ""}, 
    {email: ""}, 
    {phoneNumber: ""},
    {bio: ""}
    ]
  }
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
    //     API.saveStudent({
        /* not sure how to construct this, maybe req.body,
        or we import the format of the body?
        or list all the fields. Not sure.
        */
    //     })
        //   .then(res => this.loadStudents())
        //   .catch(err => console.log(err));
    //  };

    this.setState({
    userName: '',
    firstName: '',
    lastName: '',
    schoolName: '', 
    degree: '', 
    concentration: '', 
    city: '', 
    email: '', 
    phoneNumber: '',
    bio: ''
  })
}


render(){
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="userName">Username:</label>
        <input type="text" id="userName" onChange ={this.handleChange} value={this.state.userName}/>

        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" onChange ={this.handleChange} value={this.state.firstName}/>
        
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" onChange ={this.handleChange} value={this.state.lastName}/>
        
        <label htmlFor="schoolName">School Name:</label>
        <input type="text" id="schoolName" onChange ={this.handleChange} value={this.state.schoolName}/>
        
        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree" onChange ={this.handleChange} value={this.state.degree}/>
        
        <label htmlFor="concentration">Concentration:</label>
        <input type="text" id="concentration" onChange ={this.handleChange} value={this.state.concentration}/>
        
        <label htmlFor="city">City:</label>
        <input type="text" id="city" onChange ={this.handleChange} value={this.state.city}/>
        
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" onChange ={this.handleChange} value={this.state.email}/>
        
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" onChange ={this.handleChange} value={this.state.phoneNumber}/>
        
        <label htmlFor="bio">Bio:</label>
        <input type="text" id="bio" onChange ={this.handleChange} value={this.state.bio}/>
        
        <button>Submit</button>    

      </form>
    </div>
  )
}
}

export default AddUser


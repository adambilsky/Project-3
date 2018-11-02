import React, { Component } from "react";
// import './Styling/Forms.css'

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
    <div className="container">
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="userName"><b className= "black-text">Username<span className = "red-text">*</span></b></label>
        <input type="text" id="userName" onChange ={this.handleChange} value={this.state.userName} required/>

        <label htmlFor="firstName"><b className= "black-text">First Name<span className = "red-text">*</span></b></label>
        <input type="text" id="firstName" onChange ={this.handleChange} value={this.state.firstName} required/>
        
        <label htmlFor="lastName"><b className= "black-text">Last Name<span className = "red-text">*</span></b></label>
        <input type="text" id="lastName" onChange ={this.handleChange} value={this.state.lastName} required/>
        
        <label htmlFor="schoolName"><b className= "black-text">School Name<span className = "red-text">*</span></b></label>
        <input type="text" id="schoolName" onChange ={this.handleChange} value={this.state.schoolName} required/>
        
        <label htmlFor="degree"><b className= "black-text">Degree:</b></label>
        <input type="text" id="degree" onChange ={this.handleChange} value={this.state.degree}/>
        
        <label htmlFor="concentration"><b className= "black-text">Concentration:</b></label>
        <input type="text" id="concentration" onChange ={this.handleChange} value={this.state.concentration}/>
        
        <label htmlFor="city"><b className= "black-text">City<span className = "red-text">*</span></b></label>
        <input type="text" id="city" onChange ={this.handleChange} value={this.state.city} required/>
        
        <label htmlFor="email"><b className= "black-text">Email<span className = "red-text">*</span></b></label>
        <input type="text" id="email" onChange ={this.handleChange} value={this.state.email} required/>
        
        <label htmlFor="phoneNumber"><b className= "black-text">Phone Number:</b></label>
        <input type="tel" id="phoneNumber" onChange ={this.handleChange} value={this.state.phoneNumber}/>
        
        <label htmlFor="bio"><b className= "black-text">Bio:</b></label>
        <textarea type="textarea" id="bio" onChange ={this.handleChange} value={this.state.bio}/>
        
        <button>Submit</button>    

      </form>
    </div>
  )
}
}

export default AddUser


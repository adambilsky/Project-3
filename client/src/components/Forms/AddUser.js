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
      <div className="row">
        <div className="col s12 l7">
          <form onSubmit={this.handleSubmit}>

            <div className="input-field">
              <label htmlFor="firstName"><b className= "">First Name<span className = "red-text"> *</span></b></label>
              <input type="text" id="firstName" onChange ={this.handleChange} value={this.state.firstName} required/>
            </div>

            <div className="input-field">
              <label htmlFor="lastName"><b className= "">Last Name<span className = "red-text"> *</span></b></label>
              <input type="text" id="lastName" onChange ={this.handleChange} value={this.state.lastName} required/>
            </div>

            <div className="input-field">
              <i className="material-icons prefix">person_pin</i>
              <label htmlFor="userName"><b className= "">Username<span className = "red-text"> *</span></b></label>
              <input type="text" id="userName" onChange ={this.handleChange} value={this.state.userName} required/>
            </div>

            <div className="input-field">
              <i className="material-icons prefix">school</i>
              <label htmlFor="schoolName"><b className= "">School Name<span className = "red-text"> *</span></b></label>
              <input type="text" id="schoolName" onChange ={this.handleChange} value={this.state.schoolName} required/>
            </div>

            <div className="input-field">
              <label htmlFor="degree"><b className= "">Degree:</b></label>
              <input type="text" id="degree" onChange ={this.handleChange} value={this.state.degree}/>
            </div>

            <div className="input-field">
            <i className="material-icons prefix">camera_roll</i>
              <label htmlFor="concentration"><b className= "">Concentration:</b></label>
              <input type="text" id="concentration" onChange ={this.handleChange} value={this.state.concentration}/>
            </div>

            <div className="input-field">
              <i className="material-icons prefix">location_city</i>
              <label htmlFor="city"><b className= "">City<span className = "red-text"> *</span></b></label>
              <input type="text" id="city" onChange ={this.handleChange} value={this.state.city} required/>
            </div>

            <div className="input-field">
              <i className="material-icons prefix">email</i>
              <label htmlFor="email"><b className= "">Email<span className = "red-text"> *</span></b></label>
              <input type="email" id="email" onChange ={this.handleChange} value={this.state.email} required/>
            </div>

            <div className="input-field">
              <i className="material-icons prefix">smartphone</i>
              <label htmlFor="phoneNumber"><b className= "">Phone Number:</b></label>
              <input type="tel" id="phoneNumber" onChange ={this.handleChange} value={this.state.phoneNumber}/>
            </div>

            <div className="input-field">
              <i className="material-icons prefix">message</i>
              <label htmlFor="bio"><b className= "">Bio:</b></label>
              <textarea type="textarea" id="bio" onChange ={this.handleChange} value={this.state.bio}/>
            </div>

            <div className="input-field">
              <button className="btn">Submit</button>    
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
}

export default AddUser


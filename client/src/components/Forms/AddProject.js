import React, { Component } from "react";
// import './Styling/Forms.css'

// Still need to add to database or state
class AddProject extends Component {

  state= { 
    project: [
    {title: ""},    
    {year: ""},
    {genre: ""}, 
    {awards: ""}, 
    {role1: ""}, 
    {role2: ""}, 
    {role3: ""}, 
    {role4: ""}
    
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
    title: '',
    year: '',
    genre: '',
    awards: '', 
    role1: '', 
    role2: '', 
    role3: '', 
    role4: ''   
  })
}

render(){
  return(
    <div className="container">
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title"><b className= "black-text">Title<span className = "red-text">*</span></b></label>
        <input type="text" id="title" onChange ={this.handleChange} value={this.state.title} required/>

        <label htmlFor="year"><b className= "black-text">Year<span className = "red-text">*</span></b></label>
        <input type="text" id="year" onChange ={this.handleChange} value={this.state.year} required/>

        {/* Find a way to add multiple values maybe a drop down?? */}
        <label htmlFor="genre"><b className= "black-text">Genre</b></label>
        <input type="text" id="genre" onChange ={this.handleChange} value={this.state.genre} />
        {/* See Line 65 no drop down */}
        <label htmlFor="awards"><b className= "black-text">Awards</b></label>
        <input type="text" id="awards" onChange ={this.handleChange} value={this.state.awards} />
        
        <label htmlFor="role1"><b className= "black-text">Role1<span className = "red-text">*</span></b></label>
        <input type="text" id="role1" onChange ={this.handleChange} value={this.state.role1} required/>
        
        <label htmlFor="role2"><b className= "black-text">Role2</b></label>
        <input type="text" id="role2" onChange ={this.handleChange} value={this.state.role2} />
        
        <label htmlFor="role3"><b className= "black-text">Role3</b></label>
        <input type="text" id="role3" onChange ={this.handleChange} value={this.state.role3} />
        
        <label htmlFor="role4"><b className= "black-text">Role4</b></label>
        <input type="text" id="role4" onChange ={this.handleChange} value={this.state.role4} />
        
        
        <button className ="center right">Submit</button>    

      </form>
    </div>
  )
}
}

export default AddProject
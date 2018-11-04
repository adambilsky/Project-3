import React, { Component } from "react";
import API from "../../utils/API";

// Still need to add to database or state
class AddProject extends Component {
  state = {
    title: [],
    createdBy: '',
    school: '',
    description: '',
    link: '',
    image: '',
    yearCreated: '',
    users: []
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

    API.saveProject({
        title: this.state.title,
        createdBy: this.state.createdBy,
        school: this.state.school,
        description: this.state.description,
        link: this.state.link,
        image: this.state.image,
        yearCreated: this.state.yearCreated,
        users: this.state.users
    })
      .then(res => console.log("Project added!"))
      .catch(err => console.log(err));
      this.setState({
        title: [],
        createdBy: '',
        school: '',
        description: '',
        link: '',
        image: '',
        yearCreated: '',
        users: []
        });
      };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" onChange={this.handleChange} value={this.state.title} />
          
          <label htmlFor="createdBy">Created By:</label>
          <input type="text" id="createdBy" onChange={this.handleChange} value={this.state.createdBy} />

          <label htmlFor="school">School:</label>
          <input type="text" id="school" onChange={this.handleChange} value={this.state.school} />

          <label htmlFor="description">Description:</label>
          <input type="text" id="description" onChange={this.handleChange} value={this.state.description} />

          <label htmlFor="link">Link to Project (YouTube, Vimeo, etc):</label>
          <input type="text" id="link" onChange={this.handleChange} value={this.state.link} />

          <label htmlFor="image">Link to image:</label>
          <input type="tel" id="image" onChange={this.handleChange} value={this.state.image} />

          <button>Submit</button>

        </form>
      </div>
    )
  }
}
export default AddProject;


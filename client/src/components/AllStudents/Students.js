import React, { Component } from 'react';
import AllStudents from './AllStudents';
// import './Styling/AllStudents.css'

class StudentsList extends Component {
// this components state doesnt match what the form is going add
state = {
    students : [
     {name: "Quentin Turner", tagline:"Some random text", img:"./images/mario.png"},
     {name: "Adam Bilnsky", tagline:"Some random text", img:"./images/luigi.png"},
     {name: "Julie Ores", tagline:"Some random text", img:"./images/mario.png"},
     {name: "Will Thompson", tagline:"Some random text", img:"./images/luigi.png"}
    ]
}

render(){
    return(
        <div className = "allStudents">
            <h1>Students</h1>
            <AllStudents students={this.state.students} />
        </div>
    )
}

}

export default StudentsList
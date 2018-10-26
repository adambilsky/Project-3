import React, { Component } from 'react';
import AllStudents from './components/AllStudents/AllStudents';
import './Styling/AllStudents.css'

class Main extends Component {

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
        <div className = "Main">
            <h1>Students</h1>
            <AllStudents students = {this.state.students}/>
        </div>
    )
}

}

export default Main
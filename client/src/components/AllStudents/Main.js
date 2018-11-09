import React, { Component } from 'react';
import AllStudents from './components/AllStudents/AllStudents';
import './Styling/AllStudents.css'
import StudentList from "../src/components/PeopleCard/student";
import SchoolCard from "../src/components/SchoolCard";
import { WorkList, ListItem } from "../src/components/WorkList";

class Main extends Component {

    state = {
        students: [
            { name: "Marty Scorcese", tagline: "I am a film student", img: "./images/mario.png" },
            { name: "Adam Bilnsky", tagline: "I direct short horror films", img: "./images/luigi.png" },
            { name: "Julie Ores", tagline: "I am a director of photography", img: "./images/mario.png" },
            { name: "Will Thompson", tagline: "I am a camera operator", img: "./images/luigi.png" }
        ]
    }

    render() {
        return (
            <div className="Main">
<div className="container">
                <SchoolCard
                    id={1}
                    image={"https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/depaul_u-1/original.png?1532644892"}
                    alt={"is this gona work"}
                    tagline={"We want our students to succeed..."}
                    schoolName={"DePaul University"}
                    city={"Chicago, IL"}
                    email={"filmdep@depaul.edu"}
                />
                </div>
                <div className="container">
                <h4>Students</h4>
                {this.state.students.map(student => (
                <WorkList>
                
                    <ListItem key={student.name}>
                        <img src={student.img} alt="" className="circle" />
                        <a href="/profile"><span className="title"><b>{student.name}</b></span></a>
                        <p>{student.tagline}</p>
                    </ListItem>
                    
                    </WorkList>
                    ))}
                </div>
                
                {/* <AllStudents students={this.state.students} /> */}
            </div>
        )
    }

}

export default Main
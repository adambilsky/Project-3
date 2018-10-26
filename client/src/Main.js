import React, { Component } from 'react';
import AllStudents from './components/AllStudents/AllStudents';
import './Styling/AllStudents.css'
import StudentList from "../src/components/PeopleCard/student";
import SchoolCard from "../src/components/SchoolCard";

class Main extends Component {

    state = {
        students: [
            { name: "Quentin Turner", tagline: "Some random text", img: "./images/mario.png" },
            { name: "Adam Bilnsky", tagline: "Some random text", img: "./images/luigi.png" },
            { name: "Julie Ores", tagline: "Some random text", img: "./images/mario.png" },
            { name: "Will Thompson", tagline: "Some random text", img: "./images/luigi.png" }
        ]
    }

    render() {
        return (
            <div className="Main">

                <SchoolCard
                    id={1}
                    image={"https://i.imgur.com/wU1W62O.jpg"}
                    alt={"is this gona work"}
                    tagline={"tagline"}
                    schoolName={"schoolname"}
                    city={"City"}
                    email={"Contact"}
                />
                <div className="container">
                <h1>Students</h1>
                    <ul className="collection">
                        <li className="collection-item avatar">
                            <img src="images/yuna.jpg" alt="" className="circle" />
                            <span className="title">Title</span>
                            <p>First Line <br />
                                Second Line
                                </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                        <li className="collection-item avatar">
                            <i className="material-icons circle">folder</i>
                            <span className="title">Title</span>
                            <p>First Line <br />
                                Second Line
                                </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                        <li className="collection-item avatar">
                            <i className="material-icons circle green">insert_chart</i>
                            <span className="title">Title</span>
                            <p>First Line <br />
                                Second Line
                               </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                        <li className="collection-item avatar">
                            <i className="material-icons circle red">play_arrow</i>
                            <span className="title">Title</span>
                            <p>First Line <br />
                                Second Line
                             </p>
                            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                    </ul>
                </div>
                <AllStudents students={this.state.students} />
            </div>
        )
    }

}

export default Main
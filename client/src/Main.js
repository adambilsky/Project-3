import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AllStudents from './components/AllStudents/AllStudents';
import './Styling/AllStudents.css'
import StudentList from "../src/components/PeopleCard/student";
import SchoolCard from "../src/components/SchoolCard";
import { WorkList, ListItem } from "../src/components/WorkList";
import API from "./utils/API";

class Main extends Component {

    state = {
        students: []
    }

    componentDidMount() {
        this.loadStudents();
    }
    loadStudents = () => {
        API.getStudents()
            .then(res => this.setState({ students: res.data }))
            .catch(err => console.log(err));
    };


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

                            <ListItem key={student._id}>
                                <img src={student.img} alt="" className="circle" />
                                <Link to={`/profile/${student._id}`}>
                                    <span className="title">
                                        <b>{student.firstName} {student.lastName} {student.schoolName}</b>
                                    </span></Link>
                            </ListItem>

                        </WorkList>
                    ))}
                </div>

            </div>
        )
    }

}

export default Main
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../Styling/AllStudents.css'
import SchoolCard from "../../components/SchoolCard";
import { WorkList, ListItem } from "../../components/WorkList";
import API from "../../utils/API";

class Main extends Component {

    state = {
        students: [],
        school: []
    }

    componentDidMount() {
        API.getSchool(this.props.match.params.id)
            .then(res => this.setState({ school: res.data }))
            .catch(err => console.log(err));

        API.getStudentsBySchool(this.props.match.params.id)
            .then(res => this.setState({ students: res.data }))
            .catch(err => console.log(err));

    }

    render() {
        return (
            <div className="Main">
                <div className="container">
                    <SchoolCard
                        id={this.state.school.id}
                        image={this.state.school.image}
                        alt={""}
                        URL={this.state.school.URL}
                        tagline={this.state.school.bio}
                        schoolName={this.state.school.schoolName}
                        city={this.state.school.schoolCity}
                        email={this.state.school.adminEmail}
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
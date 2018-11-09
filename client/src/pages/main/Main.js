import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import '../../Styling/AllStudents.css'
import SchoolCard from "../../components/SchoolCard";
import { WorkList, ListItem } from "../../components/WorkList";
import API from "../../utils/API";

class Main extends Component {

    state = {
        students: [],
        school: [],
        projects: []
    };

    componentDidMount() {
        API.getSchool(this.props.match.params.id)
            .then(res => this.setState({ school: res.data }))
            .catch(err => console.log(err));

        API.getSchoolProjects(this.props.match.params.id)
            .then(res => this.setState({ projects: res.data }))
            .catch(err => console.log(err));

        API.getStudentsBySchool(this.props.match.params.id)
            .then(res => this.setState({ students: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                    <div className="Main">
                    <Row>
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
                    </Row>

                    <Row>
                        <Col size="md-6">
                            <div className="container">
                                <h4>Students</h4>
                                {this.state.students.map(student => (
                                    <WorkList>

                                        <ListItem key={student._id}>
                                            <img src={student.profileImg} alt="" className="circle" />
                                            <Link to={`/profile/${student._id}`}>
                                                <span className="title">
                                                    <b>{student.firstName} {student.lastName}</b>
                                                </span></Link>
                                        </ListItem>

                                    </WorkList>
                                ))}
                            </div>

                        </Col>
                        <Col size="md-6 sm-12">
                            <div className="container">
                                <h4>Projects</h4>

                                {this.state.projects.map(project => (
                                    <WorkList>
                                        <ListItem key={project._id}>
                                            <Link to={`/project/${project._id}`}>
                                                <span className="title">
                                                    <b>{project.title}</b>
                                                </span></Link>
                                        </ListItem>
                                    </WorkList>
                                ))}
                            </div>
                         </Col>
                    </Row>
                </div>
            </Container>
        )    
}

}

export default Main
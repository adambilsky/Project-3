import React from "react";
import PeopleCard from '../PeopleCard';
import ProjectCard from '../ProjectCard';
import API from "../../utils/API";

import { WorkList, ListItem } from "../WorkList";

class Profile extends React.Component {

    state = {
        student: [],
        projects: []
    };

    componentDidMount() {
        console.log(this);
        API.getStudent(this.props.match.params.id)
            .then(res => this.setState({ student: res.data }))
            .catch(err => console.log(err));
        API.getStudentProjects(this.props.match.params.id) /* <-- this parameter can't be the same - placeholder only */
            .then(res => this.setState({ projects: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <PeopleCard
                    id={this.state.student.id}
                    image={"https://i.imgur.com/wU1W62O.jpg"}
                    alt={"is this gona work"}
                    firstName={this.state.student.firstName}
                    lastName={this.state.student.lastName}
                    tagline={this.state.student.bio}
                    schoolName={this.state.student.schoolName}
                    degree={this.state.student.degree}
                    concentration={this.state.student.concentration}
                    city={this.state.student.city}
                    email={this.state.student.email}
                />
                <h4>Experience:</h4>
                    {this.state.projects.map(project => (
                        <WorkList>

                            <ListItem key={project._id}>
                            <img id="profPhoto" className="card-img-top circle" src={project.image} alt="alt"/>
                            <p><b>{project.title}</b></p>
                            <p>{project.description}</p>
                            </ListItem>

                        </WorkList>
                    ))}


            </div>
        );
    }
}

export default Profile;

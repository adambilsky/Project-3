import React from "react";
import PeopleCard from '../../components/PeopleCard';
import API from "../../utils/API";

import { WorkList, ListItem } from "../../components/WorkList";

class Profile extends React.Component {

    state = {
        student: [],
        projects: []

        // create two arrays here - one for OWNED projects, and one for projects listed as a participant?

    };

    componentDidMount() {
        console.log(this);
        API.getStudent(this.props.match.params.id)
            .then(res => this.setState({ student: res.data }))
            .catch(err => console.log(err));
        // API.getStudentProjects(this.props.match.params.id)
        //     .then(res => this.setState({ projects: res.data }))
        //     .catch(err => console.log(err));
        API.getUserProjects(this.props.match.params.id)
            .then(res => this.setState({ projects: res.data }))
            .catch(err => console.log(err));

    }

    render() {
        return (
            <div className="container">
                <PeopleCard
                    id={this.state.student.id}
                    image={this.state.student.profileImg}
                    alt={"is this gonna work"}
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
                                <p><b>{project.title}</b>, Created by: {}</p>
                                <p>{project.description}  <a href={project.link} target="_blank">Watch it here</a></p>
                            </ListItem>

                        </WorkList>
                    ))}


            </div>
        );
    }
}

export default Profile;

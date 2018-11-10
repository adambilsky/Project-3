import React from "react";
import { Link } from "react-router-dom";
import PeopleCard from '../../components/PeopleCard';
import API from "../../utils/API";
import { WorkList, ListItem } from "../../components/WorkList";

class Profile extends React.Component {

    state = {
        student: [],
        projects: [],
        roles: []
    };

    componentDidMount() {
        console.log(this.state);
        API.getStudent(this.props.match.params.id)
            .then(res => this.setState({ student: res.data }))
            .catch(err => console.log(err));
        API.getUserProjects(this.props.match.params.id)
            .then(res => this.setState({ projects: res.data, roles: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <PeopleCard
                    id={this.state.student.id}
                    image={this.state.student.profileImg}
                    alt={"img"}
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
                                <img id="profPhoto" className="card-img-top circle" src={project.image} alt="img"/>
                                <Link to={`/project/${project._id}`}>
                                 <span><b>{project.title}</b> | {project.yearCreated}</span></Link> | <b>Roles:</b>{project.users.roles}
                            </ListItem>
                        </WorkList>
                    ))}
            </div>
        );
    }
}

export default Profile;

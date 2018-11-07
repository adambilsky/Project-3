import React, { Component } from 'react';
import API from "../../utils/API";
import ProjectCard from "../../components/ProjectCard";
import { WorkList, ListItem } from "../../components/WorkList";
// import roles from "./roles";

class Project extends Component {

    state = {
        project: [],
        users: [],
        user: ""
    };

    componentDidMount() {
        console.log(this);
        this.loadProject()
    }
    loadProject = () => {
        API.getProject(this.props.match.params.id)
            .then(res => this.setState({ project: res.data, users: res.data.users }))
            .catch(err => console.log(err));
    }
    // getUserName = () => {
    //     API.getStudent(this.state.user.id)
    //     console.log(this.state.user.id);
    // }

    render() {
        return (
            <div className="Project">
                <div className="container">
                    <ProjectCard
                        id={this.state.project.id}
                        image={this.state.project.image}
                        title={this.state.project.title}
                        yearCreated={this.state.project.yearCreated}
                        description={this.state.project.description}
                        users={this.state.project.users}
                        link={this.state.project.link}
                    />
                </div>
                <div className="container">
                    <h6>"Add User" Button</h6>
                </div>
                <div className="container">
                    {this.state.users.map(user => (
                        // getUserName(user)
                            // .then(this.setState({ user: res.data.firstName }))
                            // .catch(err => console.log(err))
                           
                        <WorkList>
                            <ListItem key={user._id}>
                                <span className="title">
                                    <b>{user.id} | {user.roles.join(", ")}</b>
                                </span>
                            </ListItem>
                        </WorkList>
                    ))}

                </div>
            </div>
        );
    }
}

export default Project;

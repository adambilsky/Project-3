import React, { Component } from 'react';
import API from "../../utils/API";
import ProjectCard from "../../components/ProjectCard";
import { WorkList, ListItem } from "../../components/WorkList";
import roles from "./roles";

class Project extends Component {

    state = {
        project: [],
        users: [],
        user: ""
    };

    componentDidMount() {
        console.log(this);
        this.loadProject();
        // this.getUserName();

    }
    loadProject = () => {
        API.getProject(this.props.match.params.id)
            .then(res => this.setState({ project: res.data, users: res.data.users }))
            .catch(err => console.log(err));
    } 
    // getUserName = () => {
    //     API.(this.state.users.userId)
    //     console.log(this.state.users.userId);
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
                    <p>(insert "Add User" Button here)</p>
                </div>
                <div className="container">
                
                    {this.state.users.map(user => (
                            // .then(this.setState({ user: res.data.firstName }))
                            // .catch(err => console.log(err))
                           
                        <WorkList>
                            <ListItem key={user._id}>
                                <span className="title">
                                    <b>{user.userId} | {user.roles.join(", ")}</b>
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

import React, { Component } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";
import { WorkList, ListItem } from "../../components/WorkList";
import projectRoles from "./projectRoles";

class Project extends Component {

    state = {
        project: {},
        users: [],
        user: ""
    };

    componentDidMount() {
        console.log(this.state);
        this.loadProject();
        console.log(projectRoles);
        console.log(Object.entries(projectRoles));
        console.log(Object.keys(projectRoles));
        
    }

    loadProject = () => {
        API.getProject(this.props.match.params.id)
            .then(res => {
                console.log(res.data)
                this.setState({ project: res.data[0] })
            })
            .catch(err => console.log(err));
    } 

    translateRoles = (e) => {
        // map the array at project.users.roles
        // against the keys in the imported projectRoles object
        // and return a corresponding array of the matching values 
    }
    render() {
        return (
            <div className="Project">
                <div className="container">
                    <ProjectCard
                        id={this.state.project.id}
                        // image={this.state.project.image || "https://www.freeiconspng.com/img/23479"}
                        src={this.state.project.src || "https://www.freeiconspng.com/img/23479"}
                        title={this.state.project.title}
                        yearCreated={this.state.project.yearCreated}
                        description={this.state.project.description}
                        users={this.state.project.users}
                        link={this.state.project.link}
                    />
                </div>
                {/* <div className="container">
                    <p>(insert "Add User" Button here)</p>
                </div> */}
                <div className="container">
                
                    {this.state.project.users && this.state.project.users.map(user => (
                        <WorkList>
                            <ListItem key={user.userId._id}>
                                <span className="title">
                                <Link to={`/profile/${user.userId._id}`}><b>{user.userId.firstName} {user.userId.lastName}</b></Link> | {user.roles.join(", ")}
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

import React, { Component } from 'react';
import API from "../../utils/API";
import ProjectCard from "../../components/ProjectCard";
import { WorkList, ListItem } from "../../components/WorkList";

class Project extends Component {

    state = {
        project: [],
        users: []
    };

    componentDidMount() {
        console.log(this);
        this.loadProject()
    }
    loadProject = () => {
        API.getProject(this.props.match.params.id) /* placeholder only? */
            .then(res => this.setState({ project: res.data, users: res.data.users }))
            .catch(err => console.log(err));
    }

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
                    {this.state.users.map(user => (

                        <WorkList>
                            <ListItem key={user._id}>
                                <span className="title">
                                    <b>{user.id} | {user.roles.join()}</b>
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

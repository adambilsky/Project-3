import React from "react";
import ProjectList from '../ProjectList';
import API from "../../utils/API";
import { WorkList, ListItem } from "../src/components/WorkList";

class Project extends React.Component {

    state = {
        projects: []
    };

    componentDidMount() {
        this.loadProject()
    }

    loadProject = () => {
        API.getProject(this.props.match.params.id) /* placeholder only? */
        .then(res => this.setState({ projects: res.data }))
        .catch(err => console.log(err));    
    }

    render() {
        return (
            <div className="container">
                {this.state.projects.map(project => (
                        <ProjectCard
                            id={this.state.project.id}
                            title={this.state.project.title}
                            createdBy={this.state.project.createdBy}
                            year={this.state.project.year}
                            link={this.state.project.link}
                        />
                ))}
            </div>
        );
    }
}
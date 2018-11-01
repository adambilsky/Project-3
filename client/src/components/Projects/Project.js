import React from "react";
import ProjectCard from '../ProjectCard';
import API from "../../utils/API";
import { WorkList, ListItem } from "../src/components/WorkList";

class Project extends React.Component {

    state = {
        projects: []
    };

    componentDidMount() {
        API.getStudentProjects(this.props.match.params.id) /* placeholder only? */
            .then(res => this.setState({ projects: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
            <h4>All Student Projects</h4>
                {this.state.projects.map(project => (
                    <Worklist>
                        <ProjectCard
                            id={this.state.project.id}
                            title={this.state.project.title}
                            createdBy={this.state.project.createdBy}
                            year={this.state.project.year}
                            link={this.state.project.link}
                        />
                    </Worklist>
                ))}
            </div>
        );
}
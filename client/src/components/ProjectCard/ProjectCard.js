import React from "react";
import "./style.css";

const ProjectCard = props => (
    <div>

        <div className="grid-container">
            <div className="card grid-item" id={props.id}>
                <img id="profPhoto" className="card-img-top circle" src={props.image}/>

                <h4>{props.title} ({props.yearCreated})</h4>
                <p>Created By: {props.createdBy}</p>
                <p>Description: {props.description}</p>
                <a target='_blank' href={props.link}>View Project</a>
            </div>
        </div>
        
    </div>
);

export default ProjectCard;
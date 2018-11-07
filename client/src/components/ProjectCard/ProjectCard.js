import React from "react";
import "./style.css";

const ProjectCard = props => (

        <div className="container" id={props.id}>
                {/* implement grid/columns here to display photo to the right of the below info */}
                <img id="profPhoto" className="card-img-top circle" src={props.image} alt="none provided" />

                <h4>{props.title} ({props.yearCreated})</h4>
                <h5>Synopsis</h5>
                <p>{props.description}</p>
                <h5>Cast and Crew</h5>
                {/* <p>{props.users}</p> */}
                <a href={props.link} target="_blank">Watch it here</a>
        </div>
        
);

export default ProjectCard;
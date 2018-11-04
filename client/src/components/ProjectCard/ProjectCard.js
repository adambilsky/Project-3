import React from "react";
import "./style.css";

const ProjectCard = props => (
    <div>

        <div className="grid-container">
                {props.children}
            </div>
        
    </div>
);

export default ProjectCard;
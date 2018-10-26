import React from "react";
import "./style.css";

const SchoolCard = props => (
    <div>

        <div className="grid-container">
            <div className="card grid-item" id={props.id}>
                <img id="profPhoto" className="card-img-top circle" src={props.image} alt={props.name} />

                <h4>{props.schoolName}</h4>
                <p>{props.tagline}</p>
                <p>{props.schoolName} | {props.city}</p>
                <p>Contact: {props.email}</p>

            </div>
        </div>
        
    </div>
);

export default SchoolCard;
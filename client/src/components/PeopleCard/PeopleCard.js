import React from "react";
import "./style.css";
import WorkList from "../WorkList";

const PeopleCard = props => (
    <div>

        <div className="grid-container">
            <div className="card grid-item" id={props.id}>
                <img id="profPhoto" className="card-img-top circle" src={props.image} alt={props.name} />

                <h4>{props.firstName} {props.lastName}</h4>
                <p>{props.tagline}</p>
                <p>{props.schoolName} | <b>Major:</b> {props.degree} <b>Concentration:</b> {props.concentration} | <b>Location: </b>{props.city}</p>
                <p>Contact: {props.email}</p>

            </div>
        </div>
        
    </div>
);

export default PeopleCard;
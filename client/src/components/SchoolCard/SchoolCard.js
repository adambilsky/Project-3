import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const SchoolCard = props => (
    <div>

        <div className="grid-container">
            <div className="card grid-item" id={props.id}>
                <img id="profPhoto" className="card-img-top" src={props.image} alt={props.name} />
                <Link to={`/school/${props.id}`}><h4>{props.schoolName}</h4></Link>
                <p>{props.tagline}</p>
                <b><p>{props.schoolName} | {props.city}</p></b>
                <p>Contact: {props.email}</p>

            </div>
        </div>
        
    </div>
);

export default SchoolCard;
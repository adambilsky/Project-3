import React from "react";
import "./style.css";

const PeopleCard = props => (
    <div>
    <div className="grid-container">
        <div className="card grid-item" id={props.id}>
            <img id="profPhoto" className="card-img-top" src={props.image} alt={props.name} />
            <div className="tagLine">
                <h4>{props.name}</h4>
                <p>{props.tagline}</p>
                <p>{props.info}</p>
            </div>
        </div>
    </div>



</div>
);

export default PeopleCard;
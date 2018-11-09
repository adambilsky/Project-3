import React from "react";
import PeopleCard from '../PeopleCard';
// import Student from "./student.js"
import API from "../../utils/API";

import { WorkList, ListItem } from "../WorkList";

// const Profile = props => (
// <div>

// </div>
// );


class Profile extends React.Component {

    state = {
        student: []
    };


    componentDidMount() {
        API.getStudent(this.props.match.params.id)

            .then(res => this.setState({ student: res.data }))
            .catch(err => console.log(err));

        // this.setState({ student: Student })
    }


    render() {
        return (

            <div className="container">
                {/* { console.log(this.state.student.contactInfo["email"]) } */}

                <PeopleCard
                    id={this.state.student.id}
                    image={"https://i.imgur.com/wU1W62O.jpg"}
                    alt={"is this gona work"}
                    firstName={this.state.student.firstName}
                    lastName={this.state.student.lastName}
                    tagline={this.state.student.bio}
                    schoolName={this.state.student.schoolName}
                    degree={this.state.student.degree}
                    concentration={this.state.student.concentration}
                    city={this.state.student.city}
                    email={"this.state.student.contactInfo[0]"}
                />
                <h4>Experience:</h4>
                <WorkList>
                    <ListItem>
                        <img src="https://i.imgur.com/wU1W62O.jpg" alt="" className="circle" />
                        <span className="title"><b>Project Title 1</b></span>
                        <p><b>Role</b> <br />
                            Description. I did this. We worked together, it was great.</p>
                    </ListItem>
                </WorkList>

                <WorkList>
                    <ListItem>
                        <img src="https://i.imgur.com/tjF63dq.jpg" alt="" className="circle" />
                        <span className="title"><b>Project Title 2</b></span>
                        <p><b>Role</b> <br />
                            Description. I did this. We worked together, it was great.</p>
                    </ListItem>
                </WorkList>

            </div>
        );
    }
} 

export default Profile;

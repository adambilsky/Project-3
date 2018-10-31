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
    }

    render() {
        return (
            <div className="container">
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
                    email={this.state.student.email}
                />
                <h4>Experience:</h4>
                {/* {this.state.students.resume.map(student => ( */}
                <WorkList>
                    <ListItem>
                        {/* <p>Project: {student.resume}</p> */}
                    </ListItem>
                </WorkList>
                {/* ))} */}

                <WorkList>
                    <ListItem>
                            resume={this.state.student.concentration}
                    </ListItem>
                </WorkList>

            </div>
        );
    }
}

export default Profile;

import React from "react";
import PeopleCard from '../PeopleCard';
import Student from "./student.js"
import { WorkList, ListItem } from "../WorkList";

// const Profile = props => (
// <div>

// </div>
// );

const listOptions = Object.keys(Student).map(function(key) {
    return <option value={key}>{Student[key]}</option>
});
class Profile extends React.Component {

    state = {
        student: []
    };

    componentDidMount() {
        this.setState({ student: Student })
    }

 


    render() {
        return (
            <div className="container">
                <PeopleCard
                    id={1}
                    image={"https://i.imgur.com/wU1W62O.jpg"}
                    alt={"is this gona work"}
                    firstName={this.state.student.firstName}
                    lastName={this.state.student.lastName}
                    tagline={this.state.student.bio}
                    schoolName={this.state.student.schoolName}
                    degree={this.state.student.degree}
                    concentration={this.state.student.concentration}
                    city={this.state.student.city}
                    email={""}
                />
                    <WorkList>
                            <ListItem>
                                <p>{listOptions.producer}</p>
                            </ListItem>
                    </WorkList>

            </div>
        );
    }
}

export default Profile;

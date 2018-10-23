import React from "react";
import PeopleCard from '../PeopleCard';

// const Profile = props => (
// <div>

// </div>
// );
class Profile extends React.Component {

    render() {
        return (
            <div className="container">
            <PeopleCard
                id={1}
                image={"https://i.imgur.com/wU1W62O.jpg"}
                alt={"is this gona work"}
                name={"Will Thompson"}
                tagline={"I am a student of film"}
                info={"Columbia College | Will@columbia.edu | 312-802-8981"}
            />
            </div>
        );
    }
}

export default Profile;

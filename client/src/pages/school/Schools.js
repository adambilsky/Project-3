import React from "react";
import { Link } from "react-router-dom";
import SchoolCard from '../../components/SchoolCard';
import API from "../../utils/API";



class Schools extends React.Component {
    // set initial state
    state = {
        schools: []
    };

    componentDidMount() {
        this.loadSchools()
    }

    // declare school "load" (get) method using API promise
    loadSchools = () => {
        API.getSchools()
          .then(res =>
            this.setState({ schools: res.data })
          )
          .catch(err => console.log(err));
      };
    


      render() {
        return (
            <div className="container">
                <h4>Schools:</h4>
                    {this.state.schools.map(school => (
                        <SchoolCard key={school._id}
                            id={school._id}
                            schoolName={school.schoolName}
                            tagLine={school.tagLine}
                            URL={school.URL}
                            email={school.adminEmail}
                            city={school.schoolCity}
                        />
                    ))}


            </div>
        );
    }
}

// export the Schools class
export default Schools;
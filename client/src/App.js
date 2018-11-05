import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import StudentsList from './components/AllStudents/Students';
=======
>>>>>>> f1220a0a4377badc723933bc79ded6d9b3f34bc9
import React, { Component }  from "react";
import AddUser from './components/Form/AddUser';
import AddSchool from './components/Form/AddSchool';
import AddProject from './components/Form/AddProject';
import Nav from "./components/Nav";
<<<<<<< HEAD
import Jumbotron from "./components/Jumbotron";
import Profile from "./components/Profile";
import Main from "./Main";
import AddUser from './components/Forms/AddUser'
import AddProject from "./components/Forms/AddProject"
// import pages and components here // 

// import Students from "./pages/student";
=======
import Landing from "./pages/landing";
import Main from "./pages/main";
import Profile from "./pages/profile";
>>>>>>> f1220a0a4377badc723933bc79ded6d9b3f34bc9
import Schools from "./pages/school";
import Project from "./pages/project";

// import pages and components above // 

const App = () => (
    <Router>
        <div>
            <Nav />
                <Route exact path="/" component={Landing} />
                <Route exact path="/profile/:id" component={Profile} />
<<<<<<< HEAD
                <Route exact path="/main" component={Main} />
                <Route exact path="/add" component={AddUser} />
                <Route exact path="/p" component={AddProject} />
                {
                /*  <Route exact path="/" component={} />
                    <Route exact path="/" component={} />
                    <Route exact path="/" component={} /> */
                }
=======
                <Route exact path="/school/:id" component={Main} />
                <Route exact path="/project/:id" component={Project} />
                <Route exact path="/addUser" component={AddUser} />
                <Route exact path="/addSchool" component={AddSchool} />
                <Route exact path="/addProject" component={AddProject} />
                <Route exact path="/schools" component={Schools} />
>>>>>>> f1220a0a4377badc723933bc79ded6d9b3f34bc9
        </div>
    </Router>
);

export default App;
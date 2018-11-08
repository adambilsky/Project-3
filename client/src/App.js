import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component }  from "react";
import AddUser from './components/Form/AddUser';
import AddSchool from './components/Form/AddSchool';
import AddProject from './components/Form/AddProject';
import Search from './components/Search';
import Nav from "./components/Nav";
import Landing from "./pages/landing";
import Main from "./pages/main";
import Profile from "./pages/profile";
import Schools from "./pages/school";
import Project from "./pages/project";
import Login from "./pages/login";

// import pages and components above // 

const App = () => (
    <Router>
        <div>
            <Nav />
                <Route exact path="/" component={Landing} />
                <Route exact path="/profile/:id" component={Profile} />
                <Route exact path="/school/:id" component={Main} />
                <Route exact path="/project/:id" component={Project} />
                <Route exact path="/addUser" component={AddUser} />
                <Route exact path="/addSchool" component={AddSchool} />
                <Route exact path="/addProject" component={AddProject} />
                <Route exact path="/schools" component={Schools} />

                <Route exact path="/search" component={Search} />
                <Route exact path="/login" component={Login} />


        </div>
    </Router>
);

export default App;
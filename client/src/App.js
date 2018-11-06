import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from './components/Form/AddUser';
import AddSchool from './components/Form/AddSchool';
import React, { Component }  from "react";
import Nav from "./components/Nav";
import Landing from "./pages/landing";
import Profile from "./pages/profile";
import Main from "./pages/main";
import Schools from "./pages/school";
import Login from "./pages/login";

// import pages and components above // 

const App = () => (
/* Not sure how the authentication pages fit into this structure. */

    <Router>
        <div>
                
            <Nav />
                <Route exact path="/" component={Landing} />
                <Route exact path="/profile/:id" component={Profile} />
                <Route exact path="/school/:id" component={Main} />
                <Route exact path="/addUser" component={AddUser} />
                <Route exact path="/addSchool" component={AddSchool} />
                <Route exact path="/schools" component={Schools} />
                <Route exact path="/login" component={Login} />

        </div>
    </Router>
);

export default App;
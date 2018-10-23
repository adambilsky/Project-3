import React, { Component }  from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Profile from "./components/Profile";
// import pages and components here // 

const App = () => (
/*  for now, the app is structured like the book app, 
    but we will add and change as we go */

    <Router>
        <div>
            <Nav />
                <Route exact path="/" component={Jumbotron} />
                <Route exact path="/profile" component={Profile} />
                {
                /*  <Route exact path="/" component={} />
                    <Route exact path="/" component={} />
                    <Route exact path="/" component={} /> */
                }
        </div>
    </Router>
);

export default App;
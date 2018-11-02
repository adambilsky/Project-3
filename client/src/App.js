import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from './components/Form'
import React, { Component }  from "react";
import Nav from "./components/Nav";
import Landing from "./pages/landing";
import Profile from "./pages/profile";
import Main from "./pages/main";
import Schools from "./pages/school";
// import pages and components here // 

// import Students from "./pages/student";

// import pages and components above // 

/* Note: this App file is essentially a rendering router - 
it doesn't require any other functions */

const App = () => (
/*  for now, the app is structured like the book app, 
    but we will add and change as we go 
    My understanding is this page will simply route between various 
    pages, so all we have to do is supply the various routes
    within the switch function, as long as the paths are correct. 
    
    Note: the book app (20-react/01-Activities/11-Stu_ReactRouter/ 
        contains the model for this App file. It only switches between three pages 
        (the default and the get "all" are the same), the single
        book "Detail" page, and the "No Match" (or not found) page.

        Not sure how the authentication pages fit into this structure.
        */

    <Router>
        <div>
            
                
            <Nav />
                <Route exact path="/" component={Landing} />
                <Route exact path="/profile/:id" component={Profile} />

                <Route exact path="/school/:id" component={Main} />
                <Route exact path="/add" component={AddUser} />
                <Route exact path="/schools" component={Schools} />

                {
                /*  <Route exact path="/" component={} />
                    <Route exact path="/" component={} />
                    <Route exact path="/" component={} /> */
                }
        </div>
    </Router>
);

export default App;
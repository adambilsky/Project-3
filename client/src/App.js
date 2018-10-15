import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages and components here // 



const App = () => (
/*  for now, the app is structured like the book app, 
    but we will add and change as we go */

    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={/*whatever*/} />
                {
                /*  <Route exact path="/" component={} />
                    <Route exact path="/" component={} />
                    <Route exact path="/" component={} /> */
                }
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
);

export default App;
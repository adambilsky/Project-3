import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './Main'
// import pages and components here // 



const App = () => (
/*  for now, the app is structured like the book app, 
    but we will add and change as we go */

    <Router>
        <div>
            
            <Switch>
                <Route exact path="/main" component={Main} />
                {
                /*  <Route exact path="/" component={} />
                    <Route exact path="/" component={} />
                    <Route exact path="/" component={} /> */
                }
            </Switch>
        </div>
    </Router>
);

export default App;
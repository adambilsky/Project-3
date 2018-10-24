import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Students from "./pages/student";
import Schools from "./pages/school";
import NoMatch from "./pages/no-match";
import Nav from "./components/Nav";

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
            <Switch>
                {/* the following route is the default display*/}
                <Route exact path="/" component={/*whatever*/} />

                {/* the following route should display ALL students (assuming only one school:
                in 2.0 we may have to restructure to filter for students of a PARTICULAR school*/}
                <Route exact path="/students" component={Students} />
                
                {/* I believe here we may need two entries for the student "detail" page, 
                one for the profile owner, another for visitors, so we would need two additional 
                pages in the .pages/student/ folder */}

                {/* <Route exact path="/students/:id" component={Students} /> */}


                {/* the following route would display ALL schools */}
                <Route exact path="/schools" component={Schools} />

                {/* the following route would display ONE schools */}
                {/* <Route exact path="/schools/:id" component={School} /> */}

                }
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
);

export default App;
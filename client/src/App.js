import React, { Component }  from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
// import pages and components here // 


class App extends Component {
    render() {
        return (
        <Router>
        <div>
            <Nav />
                <Route exact path="/" component={Jumbotron} />
                {
                /*  <Route exact path="/" component={} />
                    <Route exact path="/" component={} />
                    <Route exact path="/" component={} /> */
                }
                <Route />
        </div>
    </Router>
        );
    }
}


// const App = () => (
// /*  for now, the app is structured like the book app, 
//     but we will add and change as we go */

//     <Router>
//         <div>
//             <Nav />
//                 <Route exact path="/" component={Form} />
//                 {
//                 /*  <Route exact path="/" component={} />
//                     <Route exact path="/" component={} />
//                     <Route exact path="/" component={} /> */
//                 }
//                 <Route component={NoMatch} />
//         </div>
//     </Router>
// );

export default App;
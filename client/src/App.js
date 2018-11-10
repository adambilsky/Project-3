import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component }  from "react";
import axios from 'axios'
import AddUser from './components/Form/AddUser';
import AddSchool from './components/Form/AddSchool';
import AddProject from './components/Form/AddProject';
import Search from './components/Search';
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Landing from "./pages/landing";
import Main from "./pages/main";
import Profile from "./pages/profile";
import Schools from "./pages/school";
import Project from "./pages/project";


// import pages and components above // 

class App extends Component {
    constructor() {
        super()
        this.state = {
          loggedIn: false,
          username: null
        }
    
        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
      }
    
      componentDidMount() {
        this.getUser()
      }
    
      updateUser (userObject) {
        this.setState(userObject)
      }
    
      getUser() {
        axios.get('/user/').then(response => {
          console.log('Get user response: ')
          console.log(response.data)
          if (response.data.user) {
            console.log('Get User: There is a user saved in the server session: ')
    
            this.setState({
              loggedIn: true,
              username: response.data.user.username
            })
          } else {
            console.log('Get user: no user');
            this.setState({
              loggedIn: false,
              username: null
            })
          }
        })
      }
    
      render() {
        return (
    
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
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
        </div>
    </Router>
        );
      }
}

export default App;
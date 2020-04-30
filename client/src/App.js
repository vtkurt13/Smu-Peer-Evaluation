import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/404";
import UsersPage from "./pages/UsersPage";
import StudentLogin from './pages/StudentLogin';
import ProfessorLogin from './pages/ProfessorLogin';
import CreateUser from './pages/CreateUser';
import StudentHome from './pages/StudentHome'
import ProfessorHome from './pages/ProfessorHome'
import CreateTeam from './pages/Createteam'
import { Layout } from './sytles/Layout'
import PeerEvaluation from './pages/PeerEvaluation'
import Logout from './pages/Logout'
import Objective from './pages/Objectives'
import ProfInput from './pages/ProfInput'
import ViewPeerEval from './pages/ViewPeerEval'

class App extends Component {
render() {
    return (
      <React.Fragment>
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/404" component={NotFoundPage} />
          <Route path="/createAccount" component={CreateUser} />
          <Route path="/users" component={UsersPage} />
          <Route path="/studLogin" component={StudentLogin} />
          <Route path="/profLogin" component={ProfessorLogin} />
          <Route path="/profHome" component={ProfessorHome} />
          <Route path="/studHome" component={StudentHome} />
          <Route path="/createTeam" component={CreateTeam} />
          <Route path="/peereval" component={PeerEvaluation} />
          <Route path="/objective" component={Objective} />
          <Route path="/profInput" component={ProfInput} />
          <Route path="/viewevals" component={ViewPeerEval} />
          <Route path="/logOut" component={Logout} />
          <Redirect to="/404" />
        </Switch>
      </Router>
      </Layout>
      </React.Fragment>
    )
  }
}

export default App;
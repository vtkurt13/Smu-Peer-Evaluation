import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/404";
import UsersPage from "./pages/UsersPage";
import StudentLogin from './pages/StudentLogin';
import ProfessorLogin from './pages/ProfessorLogin';
import CreateUser from './pages/CreateUser';
import StudentHome from './pages/StudentHome'
import ProfessorHome from './pages/ProfessorHome'
import CreateTeam from './pages/Createteam'

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }
  
  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
    
  //   return body;
  // };
  
  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const response = await fetch('/api/world', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ post: this.state.post }),
  //   });
  //   const body = await response.text();
    
  //   this.setState({ responseToPost: body });
  // };
  
render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/createAccount" component={CreateUser} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/studLogin" component={StudentLogin} />
          <Route exact path="/profLogin" component={ProfessorLogin} />
          <Route exact path="/profHome" component={ProfessorHome} />
          <Route exact path="/studHome" component={StudentHome} />
          <Route exact path="/createteam" component={CreateTeam} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    )
  }
}

export default App;

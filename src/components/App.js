import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import './App.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem("token") !== null ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class App extends Component {
  constructor() {
    super();
    this.state = { message: '' }
  }

  componentDidMount() {
    fetch('/api/message')
    .then(response => response.json())
    .then(json => this.setState({ message: json }));
  }

  render() {
    return (
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <Route path='/login' component={Login} />
      </Switch>
    );
  }
}

export default App;

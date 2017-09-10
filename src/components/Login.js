import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import request from "superagent";
import * as auth from "../lib/Auth";

import TabsContainer from "react-md/lib/Tabs/TabsContainer";
import Tabs from "react-md/lib/Tabs/Tabs";
import Tab from "react-md/lib/Tabs/Tab";

import LoginForm from "./LoginForm";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: auth.isAuthenticated()
    };
  }

  onLoginSuccess = (token) => {
    auth.setToken(token);
    this.setState({ redirectToReferrer: true });
  };

  doLoginSubmit = (username, password) => {
    return request
      .post("/api/login")
      .send({
        username,
        password
      })
      .type("json");
  };

  doRegisterSubmit = (username, password) => {
    return request
      .post("/api/register")
      .send({
        username,
        password
      })
      .type("json");
  };


  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="md-grid  md-cell--6">
        <TabsContainer panelClassName="md-grid" colored>
          <Tabs tabId="simple-tab">
            <Tab label="Login">
              <LoginForm
                onSuccess={this.onLoginSuccess}
                doSubmit={this.doLoginSubmit}
                buttonLabel='Log In'
              />
            </Tab>
            <Tab label="Register">
              <LoginForm
                onSuccess={this.onLoginSuccess}
                doSubmit={this.doRegisterSubmit}
                buttonLabel='Register'
              />
            </Tab>
          </Tabs>
        </TabsContainer>
      </div>
    );
  }
}

export default Login;

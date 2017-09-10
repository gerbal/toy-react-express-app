import React, { Component } from "react";
import PropTypes from "prop-types";
import * as auth from "../lib/Auth";
import './App.css'

import Button from "react-md/lib/Buttons/Button";

class Home extends Component {
  logOut = () => {
    auth.clearToken()
    this.context.router.history.push("/");
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">You're Logged In!</p>
        <Button raised onClick={this.logOut}>
          Log out
        </Button>
      </div>
    );
  }
}

Home.contextTypes = {
  router: PropTypes.object
};

export default Home;

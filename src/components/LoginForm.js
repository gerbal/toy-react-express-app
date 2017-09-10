import React, { Component } from "react";

import TextField from "react-md/lib/TextFields";
import Button from "react-md/lib/Buttons/Button";
import PropTypes from "prop-types";

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      username: "",
      password: ""
    };
  }

  login = () => {
    this.props
      .doSubmit(this.state.username, this.state.password)
      .end((err, res) => {
        if (err) {
          this.onError(err);
        } else {
          this.props.onSuccess("LoggedIn"); // Should pass a JWT here
        }
      });
  };

  onUpdateUsername = username => {
    this.setState({ username });
  };

  onUpdatePassword = password => {
    this.setState({ password });
  };

  onError = err => {
    if (err.status === 401) {
      this.setState({
        error: "Incorrect username or password. Are you registered?"
      });
    } else {
      this.setState({
        error: "Unkown error occurred, please reload and try again"
      });
    }
  };

  render() {
    return (
      <div className="md-cell md-cell--bottom  md-cell--12">
        <TextField
          id="username"
          className="md-cell md-cell--bottom  md-cell--12"
          label="Title"
          lineDirection="center"
          onChange={this.onUpdateUsername}
          placeholder="User Name"
          value={this.state.username}
        />
        <TextField
          id="password"
          className="md-cell md-cell--bottom  md-cell--12"
          label="Password"
          type="password"
          onChange={this.onUpdatePassword}
          value={this.state.password}
        />
        <Button
          className="md-cell md-cell--bottom  md-cell--12"
          raised
          onClick={this.login}
          disabled={!this.state.username || !this.state.password}
        >
          {this.props.buttonLabel}
        </Button>

        <div className="md-cell md-cell--bottom  md-cell--12">
          {this.state.error}
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  doSubmit: PropTypes.func.required,
  onSuccess: PropTypes.func.required,
  buttonLabel: PropTypes.string
};

export default LoginForm;

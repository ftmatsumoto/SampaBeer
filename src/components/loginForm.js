import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import { login } from '../actions/authActions';
import { handleChange } from '../actions/loginregisterActions';

import './loginForm.css';

class LoginContainer extends Component {
  render() {
    return (
      <div className="LoginFormContainer">
        <form className="LoginForm">
          <TextField
            id="username-input"
            label="Username"
            value={this.props.username}
            onChange={this.props.handleChange.bind(this, 'username')}
            margin="normal"
          />
          <TextField
            id="password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={this.props.password}
            onChange={this.props.handleChange.bind(this, 'password')}
            margin="normal"
          />
          <button onClick={() => {
            this.props.login({
              usernameInput: this.props.username,
              passwordInput: this.props.password
            });
          }}>
            Login
          </button>
          <ul>
            <li><Link to="/register">Sign up</Link></li>
          </ul>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
    password: state.password
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleChange: handleChange,
    login: login
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));

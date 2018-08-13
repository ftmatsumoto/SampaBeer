import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { login } from '../actions/authActions';
import { handleChange } from '../actions/loginregisterActions';

import './loginForm.css';

class LoginContainer extends Component {
  render() {
    return (
      <div className="LoginFormContainer">
        {console.log('LOGIN FORM')}
        <div className="LoginForm">
          <TextField
            id="username-input"
            label="Username"
            value={this.props.username}
            onChange={this.props.handleChange.bind(this, 'username')}
          />
          <br/>
          <TextField
            id="password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={this.props.password}
            onChange={this.props.handleChange.bind(this, 'password')}
          />
          <br/>
          <Button
            variant="outlined"
            onClick={() => {
            this.props.login({
              usernameInput: this.props.username,
              passwordInput: this.props.password
            });
          }}>
            Login
          </Button>
          <div>
            <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.loginregister.username,
    password: state.loginregister.password
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleChange: handleChange,
    login: login
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));

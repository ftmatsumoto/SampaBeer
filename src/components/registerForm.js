import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// import { register } from '../actions/authActions';
import { sendRegisterForm, getValidationState } from '../actions/uwsActions';

class RegisterContainer extends Component {
  render() {
    return (
      <div className="RegisterContainer">
        <input ref={(fullname) => {
          this.fullnameInput = fullname;
        }} />
        <input ref={(email) => {
          this.emailInput = email;
        }} />
        <input ref={(bday) => {
          this.bdayInput = bday;
        }} />
        <input ref={(telephone) => {
          this.telephoneInput = telephone;
        }} />

        <button onClick={() => {
          let data = {
              fullname: this.fullnameInput.value,
              email: this.emailInput.value,
              bday: this.bdayInput.value,
              telephone: this.telephoneInput.value
            }
          if (getValidationState(data)) {
            this.props.sendRegisterForm({
                type: '/register',
                data: data
              },
              this.props.socket
            );
          }
        }}>
          Sign up
        </button>
        <ul>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    socket: state.uws.socket
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sendRegisterForm: sendRegisterForm,
    getValidationState: getValidationState
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterContainer));

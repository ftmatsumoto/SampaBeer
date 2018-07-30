import React, { Fragment, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { DatePicker } from 'material-ui-pickers';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
// import { register } from '../actions/authActions';
import { handleChange, sendRegisterForm, getValidationState } from '../actions/loginregisterActions';

import './registerForm.css';

class RegisterContainer extends Component {
  render() {
    return (
      <div className="RegisterFormContainer">
        <div className="RegisterForm">
          <TextField
            error={this.props.fullnameError !== ''}
            required
            id="fullname-input"
            label="Nome Completo"
            value={this.props.fullname}
            onChange={this.props.handleChange.bind(this, 'fullname')}
            helperText={this.props.fullnameError}
          />
          <br/>
          <TextField
            error={this.props.emailError !== ''}
            required
            id="email-input"
            label="Email"
            value={this.props.email}
            onChange={this.props.handleChange.bind(this, 'email')}
            helperText={this.props.emailError}
          />
          <br/>
          <DatePicker
            error={this.props.bdayError !== ''}
            required
            autoOk
            leftArrowIcon={<ChevronLeft />}
            rightArrowIcon={<ChevronRight />}
            disableFuture
            maxDateMessage="Date must be less than today"
            format="D MMM YYYY"
            label="Data de Nascimento"
            value={this.props.bday}
            onChange={this.props.handleChange.bind(this, 'bday')}
            helperText={this.props.bdayError}
          />
          <br/>
          <TextField
            error={this.props.telephoneError !== ''}
            required
            id="telephone-input"
            label="Celular"
            value={this.props.telephone}
            onChange={this.props.handleChange.bind(this, 'telephone')}
            helperText={this.props.telephoneError}
          />
          <br/>
          <Button
            variant="outlined"
            onClick={() => {
            let data = {
                fullname: this.props.fullname,
                email: this.props.email,
                bday: this.props.bday,
                telephone: this.props.telephone
              }
            this.props.getValidationState(data, this.props.socket)
              // .then(() => {
              //   this.props.sendRegisterForm({
              //     type: '/register',
              //     data: {
              //       fullname: data.fullname,
              //       email: data.email,
              //       telephone: data.telephone,
              //       bday: data.bday
              //     }
              //   }, this.props.socket);
              // });
          }}>
            Sign up
          </Button>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fullname: state.loginregister.fullname,
    email: state.loginregister.email,
    bday: state.loginregister.bday,
    telephone: state.loginregister.telephone,
    fullnameError: state.loginregister.fullnameError,
    emailError: state.loginregister.emailError,
    bdayError: state.loginregister.bdayError,
    telephoneError: state.loginregister.telephoneError,
    socket: state.uws.socket
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleChange: handleChange,
    sendRegisterForm: sendRegisterForm,
    getValidationState: getValidationState
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterContainer));

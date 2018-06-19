import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// import { register } from '../actions/authActions';
import { sendRegisterForm } from '../actions/uwsActions';

class RegisterContainer extends Component {

  // getValidationState() {
  //   let nome = this.state.firstValue;
  //   let sobrenome = this.state.lastValue;
  //   let email = this.state.emailValue;
  //   let phone = this.state.phoneValue;
  //   let cdate = this.state.controlledDate;
  //   let ctime = this.state.timeValue;

  //   let nameregex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
  //   let emailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   let phoneregex = /^([0-9]{2,3})[ ]?([0-9]{4,5})[ ]?([0-9]{4})$/;
  //   if (nome.length > 0 && sobrenome.length > 0 && email.length > 0 && phone.length > 0) {
  //     if (emailregex.test(email) && nameregex.test(nome) && nameregex.test(sobrenome) && phoneregex.test(phone) && cdate !== null && ctime !== null) {
  //       return "success";
  //     } else {
  //       if (!nameregex.test(nome)) {
  //         this.setState({
  //           firstError: "Campo obrigatório"
  //         });
  //       }
  //       if (!nameregex.test(sobrenome)) {
  //         this.setState({
  //           lastError: "Campo obrigatório"
  //         });
  //       }
  //       if (!emailregex.test(email)) {
  //         this.setState({
  //           emailError: "Preencha o e-mail de forma correta"
  //         });
  //       }
  //       if (!phoneregex.test(phone)) {
  //         this.setState({
  //           phoneError: "DDD 0000 00000 ou DDD 00000 00000"
  //         });
  //       }
  //       if (!cdate) {
  //         this.setState({
  //           timeError: "Selecione uma data"
  //         });
  //       }
  //       if (!ctime) {
  //         this.setState({
  //           timeError: "Selecione um horário"
  //         });
  //       }
  //       return "error";
  //     }
  //   }
  // }

  // sendForm(e) {
  //   e.preventDefault();
  //   let currContext = this;
  //   let request = new XMLHttpRequest();
  //   if (this.getValidationState() === "success") {
  //     let data = JSON.stringify({
  //       firstValue: this.state.firstValue,
  //       lastValue: this.state.lastValue,
  //       emailValue: this.state.emailValue,
  //       phoneValue: this.state.phoneValue,
  //       dateValue: this.state.controlledDate,
  //       timeValue: this.state.timeValue
  //     });
  //     request.open("POST", "/register", true);
  //     request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  //     request.onreadystatechange = () => {
  //       if (request.readyState === XMLHttpRequest.DONE && request.status === 201) {
  //         currContext.setState({
  //           open: true
  //         });
  //       }
  //     };
  //     request.send(data);
  //     this.setState({
  //       firstValue: "",
  //       lastValue: "",
  //       emailValue: "",
  //       phoneValue: "",
  //       dateValue: null,
  //       timeValue: null
  //     });
  //   }
  // }

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
        <button onClick={() => {
          console.log('register');
          this.props.sendRegisterForm({
              type: '/register',
              data: {
                fullname: this.fullnameInput.value,
                email: this.emailInput.value,
                bday: this.bdayInput.value
              }
            },
            this.props.socket
          );
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
    sendRegisterForm: sendRegisterForm
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterContainer));

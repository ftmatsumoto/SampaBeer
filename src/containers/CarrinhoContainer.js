import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CarrinhoContainer extends Component {
  render() {
    return (
      <div className="CarrinhoContainer">
        Welcome {this.props.email}!<br/>
        Carrinho
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.auth.email,
    browser: state.browser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarrinhoContainer));

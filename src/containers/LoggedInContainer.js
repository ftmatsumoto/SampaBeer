import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import AppBar from '../components/appBar';
import FooterLogged from '../components/footerLogged';

import HomeContainer from './HomeContainer';
import ProdutoContainer from './ProdutoContainer';
import ProfileContainer from './ProfileContainer';
import CarrinhoContainer from './CarrinhoContainer';

import './LoggedInContainer.css';

class LoggedInContainer extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <div className="LoggedInContainer">
          <Route exact path='/home' component={HomeContainer} />
          <Route path='/home/cervejas' component={ProdutoContainer} />
          <Route path='/home/perfil' component={ProfileContainer} />
          <Route path='/home/carrinho' component={CarrinhoContainer} />
        </div>
        <FooterLogged />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    browser: state.browser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedInContainer));

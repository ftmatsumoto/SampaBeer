import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import AppBar from '../components/appBar';
// import Sidebar from '../components/sidebar';
import HomeContainer from './HomeContainer';
import ProfileContainer from './ProfileContainer';
import CarrinhoContainer from './CarrinhoContainer';
import ProdutoContainer from './CreditoContainer';

import FooterLogged from '../components/footerLogged';
// import TitleLogged from '../components/titleLogged';

import './LoggedInContainer.css';

class LoggedInContainer extends Component {
  render() {
    return (
      <div>
        <AppBar />
        {/*<Sidebar />*/}
        {/*<TitleLogged />*/}
        <div className="LoggedInContainer">
          <Route exact path='/home' component={HomeContainer} />
          <Route path='/cervejas' component={ProdutoContainer} />
          <Route path='/perfil' component={ProfileContainer} />
          <Route path='/carrinho' component={CarrinhoContainer} />
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

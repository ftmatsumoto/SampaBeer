import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import './TitleLogged.css';

class TitleLogged extends Component {
  render() {
    const { location } = this.props
    const titleObj = {
      '/dashboard': 'Dashboard',
      '/dashboard/profile': 'Perfil',
      '/dashboard/users': 'Usuários',
      '/dashboard/horarios': 'Horários'
    }
    return (
      <div className="TitleLogged">
        <div className="TitleText">
          <h2>{titleObj[location.pathname]}</h2>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TitleLogged));

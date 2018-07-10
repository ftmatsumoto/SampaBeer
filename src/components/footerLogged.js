import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import './footerLogged.css';

class FooterLogged extends Component {
  render() {
    return (
      <div className="FooterLogged">
        <div className="FooterText">
          2018 &copy; SampaBeerCo
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FooterLogged));


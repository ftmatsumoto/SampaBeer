import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class HomeContainer extends Component {
  render() {
    return (
      <div className="HomeContainer">
        Welcome {this.props.email}!<br/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));

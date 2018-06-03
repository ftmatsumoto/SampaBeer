import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CarrinhoContainer extends Component {
  render() {
    let message = `CARRINHO - The viewport's current media type is: ${this.props.browser.mediaType}.`

    if (this.props.browser.lessThan.small) {
        message += 'Secret message for viewports smaller than than the "small" breakpoint!'
    } else if (this.props.browser.lessThan.medium) {
        message += 'Secret message for viewports between the "small" and "medium" breakpoints!'
    } else {
        message += 'Message for viewports greater than the "medium" breakpoint.'
    }

    return (
      <div className="CarrinhoContainer">
        Welcome {this.props.email}!<br/>
        {message}
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

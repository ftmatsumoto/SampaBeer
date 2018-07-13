import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';

import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';

import { logout } from '../actions/authActions';
import { changeSidebar } from '../actions/muiActions';

// import white from '@material-ui/core/colors/white';

class appBarContainer extends Component {
  render() {
    const { match, history } = this.props;
    const rightButton = (
      <div>
        <IconButton
          aria-label="More"
          aria-haspopup="true"
          // onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem
            primaryText='Editar perfil'
            containerElement={<Link to={`${match.url}/profile`} />}
          />
          <MenuItem
            primaryText='Crédito'
            containerElement={<Link to={`${match.url}/credito`} />}
          />
          <MenuItem
            primaryText='Sign out'
            onClick={() => {
              this.props.logout();
            }}
          />
        </Menu>
      </div>
    );
    return (
      <AppBar
        onLeftIconButtonClick={() => {
          this.props.changeSidebar(true);
        }}
        iconElementRight={rightButton}
      />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    dispatch,
    logout: logout,
    changeSidebar: changeSidebar
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(appBarContainer));


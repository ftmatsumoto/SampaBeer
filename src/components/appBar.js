import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';

import Sidebar from './sidebar';
import { logout } from '../actions/authActions';
import { toggleSidebar } from '../actions/muiActions';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
    textDecoration: 'none',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class appBar extends Component {
  render() {
    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            {this.props.browser.lessThan.medium && (
              <div>
                <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon onClick={() => {this.props.toggleSidebar(this.props.sidebarOpen)}}/>
                </IconButton>
                <Sidebar />
              </div>
            )}
            <Typography
              variant="title" color="inherit" className={styles.flex}
              component={Link} to="/home"
              style={{
                textDecoration: "none"
              }}>
              Sampa Beer
            </Typography>
            {!this.props.browser.lessThan.medium && (
              <div>
                <Button color="inherit" component={Link} to="/home/cervejas">Cervejas</Button>
                <Button color="inherit" component={Link} to="/home/carrinho">Carrinho</Button>
                <Button color="inherit" component={Link} to="/home/perfil">Perfil</Button>
                <Button color="inherit" onClick={() => {this.props.logout()}}>Logout</Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

appBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    browser: state.browser,
    sidebarOpen: state.mui.sidebarOpen
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    dispatch,
    logout: logout,
    toggleSidebar: toggleSidebar
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(appBar)));


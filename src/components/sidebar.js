import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

import { logout } from '../actions/authActions';
import { toggleSidebar } from '../actions/muiActions';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <Drawer open={this.props.sidebarOpen} onClose={() => {this.props.toggleSidebar(true)}}>
          <div
            tabIndex={0}
            role="button"
            onClick={() => {this.props.toggleSidebar(this.props.sidebarOpen)}}
            onKeyDown={() => {this.props.toggleSidebar(this.props.sidebarOpen)}}
          >
            <List component="nav">
              <ListItem button component={Link} to="/home/perfil">
                {/*<ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>*/}
                <ListItemText primary="Perfil" />
              </ListItem>
            </List>
            <Divider />
            <List component="nav">
              <ListItem button component={Link} to="/home/cervejas">
                {/*<ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>*/}
                <ListItemText primary="Cervejas" />
              </ListItem>
              <ListItem button component={Link} to="/home/carrinho">
                {/*<ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>*/}
                <ListItemText primary="Carrinho" />
              </ListItem>
            </List>
            <Divider />
            <List component="nav">
              <ListItem button onClick={() => {this.props.logout()}}>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sidebarOpen: state.mui.sidebarOpen,
    browser: state.browser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logout: logout,
    toggleSidebar: toggleSidebar
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));

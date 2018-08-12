import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

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
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
            <Divider />
            <List component="nav">
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem button component="a" href="#simple-list">
                <ListItemText primary="Spam" />
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
    toggleSidebar: toggleSidebar
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));

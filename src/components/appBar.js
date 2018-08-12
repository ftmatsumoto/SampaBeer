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
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

import { withStyles } from '@material-ui/core/styles';

// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import Menu from '@material-ui/core/Menu';
// import IconButton from '@material-ui/core/IconButton';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import MenuItem from '@material-ui/core/MenuItem';
import Sidebar from './sidebar';
import { logout } from '../actions/authActions';
import { toggleSidebar } from '../actions/muiActions';

// import white from '@material-ui/core/colors/white';
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
    // const { match } = this.props;
    // const rightButton = (
    //   <div>
    //     <IconButton
    //       aria-label="More"
    //       aria-haspopup="true"
    //       // onClick={this.handleClick}
    //     >
    //       <MoreVertIcon />
    //     </IconButton>
    //     <Menu
    //       targetOrigin={{horizontal: 'right', vertical: 'top'}}
    //       anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    //     >
    //       <MenuItem
    //         primaryText='Editar perfil'
    //         containerElement={<Link to={`${match.url}/profile`} />}
    //       />
    //       <MenuItem
    //         primaryText='Crédito'
    //         containerElement={<Link to={`${match.url}/credito`} />}
    //       />
    //       <MenuItem
    //         primaryText='Sign out'
    //         onClick={() => {
    //           this.props.logout();
    //         }}
    //       />
    //     </Menu>
    //   </div>
    // );

    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            {this.props.browser.lessThan.medium && (
              <div>
                <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon onClick={() => {this.props.toggleSidebar(this.props.sidebarOpen)}}/>
                </IconButton>
                {/*console.log(this.props.sidebarOpen)*/}
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
                <Button color="inherit" component={Link} to="/cervejas">Cervejas</Button>
                <Button color="inherit" component={Link} to="/perfil">Perfil</Button>
                <Button color="inherit" component={Link} to="/carrinho">Login</Button>
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


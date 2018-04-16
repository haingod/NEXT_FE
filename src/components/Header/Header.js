import React, { Component } from 'react';
import * as propTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../modules/login/login.action';
import './header.scss';

class Header extends Component {
  static propTypes = {
    logout: propTypes.func.isRequired,
  }
  render() {
    return (
      <header>
        <nav>
          <div className="nav-left">
            DASHBOARD
          </div>
          <div className="nav-right">
            <span role="button" tabIndex="0" onKeyDown onClick={this.props.logout}>Log out</span>
          </div>
        </nav>
      </header>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: logout(dispatch),
  };
}
export default connect(null, mapDispatchToProps)(Header);

import React from 'react';
import PropTypes from 'prop-types';
import NavbarCollapse from './navigation/NavbarCollapse';
import NavbarToggler from './navigation/NavbarToggler';
import NavbarNav from './navigation/NavbarNav';

export default class Navigation extends React.Component {
  static propTypes = {
    links: PropTypes.any.isRequired
  };

  state = {
    collapsed: true
  };

  toggleCollapse = e => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <nav className="navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse">
        <NavbarToggler
          collapsed={this.state.collapsed}
          onClick={this.toggleCollapse}
        />
        <div className="container">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <NavbarCollapse collapsed={this.state.collapsed}>
            <NavbarNav links={this.props.links} />
          </NavbarCollapse>
        </div>
      </nav>
    );
  }
}

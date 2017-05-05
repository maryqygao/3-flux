import React from 'react';
import PropTypes from 'prop-types';

export default class NavbarCollapse extends React.Component {
  static propTypes = {
    collapsed: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    collapsed: true,
    children: null
  };

  render() {
    const { collapsed } = this.props;
    return (
      <div
        id="navbarExample"
        className={`navbar-collapse collapse ${collapsed ? '' : 'show'}`}
        aria-expanded={!collapsed}
      >
        {this.props.children}
      </div>
    );
  }
}

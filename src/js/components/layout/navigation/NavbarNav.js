import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavbarNav = ({ links }) => (
  <ul className="navbar-nav ml-auto">
    {links.map(({ text, to, active }) => (
      <li key={text} className={`nav-item ${active ? 'active' : ''}`}>
        <Link to={to} className="nav-link">
          {text}{active ? <span className="sr-only">(current)</span> : null}
        </Link>
      </li>
    ))}
  </ul>
);

NavbarNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default NavbarNav;

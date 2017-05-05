import React from 'react';

export default ({ onClick, collapsed }) => (
  <button
    className={`navbar-toggler navbar-toggler-right ${collapsed ? 'collapsed' : ''}`}
    type="button"
    data-toggle="collapse"
    data-target="#navbarExample"
    aria-controls="navbarExample"
    aria-expanded={!collapsed}
    aria-label="Toggle navigation"
    onClick={onClick}
  >
    <span className="navbar-toggler-icon" />
  </button>
);

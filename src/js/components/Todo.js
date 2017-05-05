import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, complete }) => (
  <li>
    <span className="card-title">{text}</span>
    <i
      className={`fa ${complete ? 'fa-check' : 'fa-close'}`}
      aria-hidden="true"
    />
  </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired
};

export default Todo;

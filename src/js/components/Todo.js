import React from 'react';
import PropTypes from 'prop-types';

export default class Todo extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    deleteOnClick: PropTypes.func.isRequired
  };

  deleteTodo = () => {
    this.props.deleteOnClick(this.props.id);
  };

  render() {
    const { text, complete } = this.props;
    return (
      <li>
        <span className="card-title">{text}</span>
        <i
          className={`fa ${complete ? 'fa-check' : 'fa-close'}`}
          aria-hidden="true"
          onClick={this.deleteTodo}
        />
      </li>
    );
  }
}

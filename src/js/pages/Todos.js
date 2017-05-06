import React from 'react';
import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';
import * as TodoActions from '../actions/TodoActions';

export default class Todos extends React.Component {
  state = {
    todos: TodoStore.getAll(),
    loading: false,
    error: false
  };

  listeners = {
    change: () => {
      this.setState({
        todos: TodoStore.getAll(),
        loading: false,
        error: false
      });
    },
    fetch: () => {
      this.setState({
        loading: true
      });
    },
    fetchError: () => {
      this.setState({
        loading: false,
        error: true
      });
    }
  };

  componentWillMount() {
    Object.entries(this.listeners).forEach(([eventName, listener]) =>
      TodoStore.on(eventName, listener)
    );
  }

  componentWillUnmount() {
    Object.entries(this.listeners).forEach(([eventName, listener]) =>
      TodoStore.removeListener(eventName, listener)
    );
  }

  inputId = 'todoInput';
  inputPlaceholder = 'Enter New Todo';

  createTodo = () => {
    const input = document.querySelector(`#${this.inputId}`);
    if (input.value.length > 0) {
      TodoActions.createTodo(input.value);
    }
  };

  deleteTodo = id => {
    TodoActions.deleteTodo(id);
  };

  reloadTodos = () => {
    TodoActions.reloadTodos();
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>
        {this.state.loading ? <i className="fa fa-spin fa-refresh" /> : null}
        {this.state.error ? <i className="fa fa-exclamation-triangle" /> : null}
        <button
          className="btn btn-primary btn-block"
          onClick={this.reloadTodos}
        >
          Reload
        </button>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            id={this.inputId}
            placeholder={this.inputPlaceholder}
          />
          <span className="input-group-btn">
            <button className="btn btn-primary" onClick={this.createTodo}>
              Add Todo
            </button>
          </span>
        </div>
        <ul>
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} deleteOnClick={this.deleteTodo} />
          ))}
        </ul>
      </div>
    );
  }
}

import React from 'react';
import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';
import * as TodoActions from '../actions/TodoActions';

export default class Todos extends React.Component {
  state = { todos: TodoStore.getAll() };

  componentWillMount() {
    TodoStore.on('change', () => {
      this.setState({
        todos: TodoStore.getAll()
      });
    });
  }

  inputId = 'todoInput';
  inputPlaceholder = 'Enter New Todo';

  createTodo = () => {
    const input = document.querySelector(`#${this.inputId}`);
    if (input.value.length > 0) {
      TodoActions.createTodo(input.value);
    }
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>
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
          {todos.map(todo => <Todo key={todo.id} {...todo} />)}
        </ul>
      </div>
    );
  }
}

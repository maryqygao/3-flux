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

  createTodo = () => {
    const input = document.querySelector('#todoInput');
    TodoActions.createTodo(input.value);
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>
        <button onClick={this.createTodo}>Add Todo</button>
        <input id="todoInput" />
        <ul>
          {todos.map(todo => <Todo key={todo.id} {...todo} />)}
        </ul>
      </div>
    );
  }
}

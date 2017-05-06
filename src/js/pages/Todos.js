import React from 'react';
import Todo from '../components/Todo';
import TodoStore from '../store/TodoStore';

export default class Todos extends React.Component {
  state = { todos: TodoStore.getAll() };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {todos.map(todo => <Todo key={todo.id} {...todo} />)}
        </ul>
      </div>
    );
  }
}

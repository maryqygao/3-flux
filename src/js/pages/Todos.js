import React from 'react';
import Todo from '../components/Todo';

export default class Todos extends React.Component {
  state = {
    todos: [
      { id: 12341232, text: 'Pay Bills', complete: false },
      { id: 34435697, text: 'Go Shopping', complete: false },
      { id: 57838337, text: 'Make Dinner', complete: false },
      { id: 34617435, text: 'Learn React', complete: false }
    ]
  };

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

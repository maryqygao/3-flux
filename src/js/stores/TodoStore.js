import axios from 'axios';
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  todos = [
    { id: 12341232, text: 'Pay Electric Bills', complete: false },
    { id: 34435697, text: 'Go Shopping', complete: false },
    { id: 57838337, text: 'Make Dinner', complete: false },
    { id: 34617435, text: 'Learn React', complete: false }
  ];

  actionHandlers = {
    CREATE_TODO: action => {
      this.createTodo(action.text);
    },
    DELETE_TODO: action => {
      this.deleteTodo(action.id);
    },
    FETCH_TODOS: action => {
      this.fetchTodos();
    },
    RECEIVE_TODOS: action => {
      this.receiveTodos(action.response);
    },
    FETCH_TODOS_ERROR: action => {
      this.fetchTodosError(action.error);
    }
  };

  handleActions = action => {
    const handlerFunc = this.actionHandlers[action.type];

    if (typeof handlerFunc === 'function') {
      handlerFunc(action);
    }
  };

  createTodo(text) {
    const id = Date.now();
    this.todos.push({ id, text, complete: false });
    this.emit('change');
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.emit('change');
  }

  fetchTodos() {
    this.emit('fetch');
  }

  receiveTodos(response) {
    this.todos = response.data;
    this.emit('change');
  }

  fetchTodosError(error) {
    this.emit('fetchError');
  }

  getAll() {
    return this.todos;
  }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions);

export default todoStore;

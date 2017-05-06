import axios from 'axios';
import dispatcher from '../dispatcher';

export function createTodo(text) {
  dispatcher.dispatch({ type: 'CREATE_TODO', text });
}

export function deleteTodo(id) {
  dispatcher.dispatch({ type: 'DELETE_TODO', id });
}

export function reloadTodos() {
  dispatcher.dispatch({ type: 'FETCH_TODOS' });
  axios
    .get('http://localhost:3000/todos')
    .then(response => {
      dispatcher.dispatch({ type: 'RECEIVE_TODOS', response: response });
    })
    .catch(error => {
      dispatcher.dispatch({ type: 'FETCH_TODOS_ERROR', error: error });
    });
}

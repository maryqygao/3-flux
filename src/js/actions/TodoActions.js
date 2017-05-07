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
      let e;
      if (error.response) {
        const { status, statusText } = error.response;
        e = `${status}, ${statusText}`;
      } else if (error.request) {
        e = error.request;
        console.log(e);
      } else {
        e = error.message;
      }
      dispatcher.dispatch({ type: 'FETCH_TODOS_ERROR', error: e });
    });
}

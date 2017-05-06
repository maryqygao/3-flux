import { EventEmitter } from 'events';

class TodoStore extends EventEmitter {
  todos = [
    { id: 12341232, text: 'Pay Electric Bills', complete: false },
    { id: 34435697, text: 'Go Shopping', complete: false },
    { id: 57838337, text: 'Make Dinner', complete: false },
    { id: 34617435, text: 'Learn React', complete: false }
  ];

  getAll() {
    return this.todos;
  }
}

const todoStore = new TodoStore();
export default todoStore;

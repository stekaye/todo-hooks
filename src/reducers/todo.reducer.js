import uuid from 'react-uuid';

export default function todoReducer(state, action) {
  switch(action.type) {
    case "ADD":
      return [...state, { id: uuid(), task: action.task, completed: false }];
    case "DELETE":
      return state.filter(todo => todo.id !== action.id);
    case "TOGGLE":
      return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo);
    case "UPDATE":
      return state.map(todo => todo.id === action.id ? {...todo, task: action.newTask} : todo);
    default:
      return state;
  }
}




//First imagine what you will passing in. For example...

// addTodo: newTodoText => {
//   setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}])
// }
// deleteTodo: todoId => {
//   let newTodosArray = todos.filter(todo => todo.id !== todoId);
//   setTodos(newTodosArray);
// },
// toggleTodo: todoId => {
//   let newTodosArray = todos.map(todo => todoId === todo.id ? {...todo, completed: !todo.completed} : todo);
//   setTodos(newTodosArray);
// },
// updateTodo: (todoId, newTask) => {
//   let newTodosArray = todos.map(todo => todoId === todo.id ? {...todo, task: newTask} : todo)
//   setTodos(newTodosArray);
// }

// We could pass...

// {type: 'ADD', task: 'WALK THE DOG'}
// {type: 'DELETE, id: 24123123}
// {type: TOGGLE, id: 24123123}
// {type: UPDATE, id: 24123123, newTask: 'FEED THE DOG'}

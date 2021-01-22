import {useState} from 'react';
import uuid from 'react-uuid'

function useTodoState(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}])
    },
    deleteTodo: todoId => {
      let newTodosArray = todos.filter(todo => todo.id !== todoId);
      setTodos(newTodosArray);
    },
    toggleTodo: todoId => {
      let newTodosArray = todos.map(todo => todoId === todo.id ? {...todo, completed: !todo.completed} : todo);
      setTodos(newTodosArray);
    },
    updateTodo: (todoId, newTask) => {
      let newTodosArray = todos.map(todo => todoId === todo.id ? {...todo, task: newTask} : todo)
      setTodos(newTodosArray);
    }
  }
}

export default useTodoState;

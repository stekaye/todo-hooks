import React, {useState, useEvent} from 'react';
import useInputState from './hooks/useInputState';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function TodoForm({addTodo}) {
  const [todo, handleTodoChange, resetTodo] = useInputState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(todo);
    resetTodo();
  }
  
  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <h1>Todo is {todo}</h1>
        <TextField type="text" value={todo} onChange={handleTodoChange}/>
        <button type='submit'>Add Todo</button>
      </form>
      
    </Paper>  
  )
}

export default TodoForm;

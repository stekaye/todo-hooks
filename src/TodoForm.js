import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { TodosContext } from './contexts/todos.context';

function TodoForm() {
  const [todo, handleTodoChange, resetTodo] = useInputState("");
  const {addTodo} = useContext(TodosContext);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(todo);
    resetTodo();
  }
  
  return (
    <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
      <form onSubmit={handleSubmit}>
        <TextField 
          type="text" 
          value={todo} 
          onChange={handleTodoChange} 
          margin='normal' 
          label='Add New Todo' 
          fullWidth
        />
      </form>
    </Paper>  
  )
}

export default TodoForm;

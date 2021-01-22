import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function EditTodoForm({id, task, updateTodo, toggleIsEditing}) {

  const [editedTodo, handleChange, reset] = useInputState(task);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateTodo(id, editedTodo);
    reset();
    toggleIsEditing();
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        value={editedTodo}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <button type='submit'>Save Todo</button>
    </form>
  )
}

export default EditTodoForm;

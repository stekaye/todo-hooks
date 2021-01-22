import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import BackspaceIcon from '@material-ui/icons/Backspace';

function EditTodoForm({id, task, updateTodo, toggleIsEditing}) {

  const [editedTodo, handleChange, reset] = useInputState(task);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateTodo(id, editedTodo);
    reset();
    toggleIsEditing();
  }

  const handleBackClick = () => {
    toggleIsEditing();
  }

  return (
    <form onSubmit={handleSubmit} style={{marginLeft: '1rem', width: '60%'}}>
      <TextField
        type="text"
        value={editedTodo}
        onChange={handleChange}
        margin="normal"
        fullWidth
        autoFocus
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Save" type='submit'>
          <SaveIcon/>
        </IconButton>
        <IconButton aria-label="Save" onClick={handleBackClick}>
          <BackspaceIcon/>
        </IconButton>
      </ListItemSecondaryAction>
      
    </form>
  )
}

export default EditTodoForm;

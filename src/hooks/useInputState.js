import {useState} from 'react';

export default function useInputState (initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = evt => {
    setValue(evt.target.value);
  }
  const reset = () => {
    setValue("");
  }
  return [value, handleChange, reset];
};

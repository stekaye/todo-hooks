import {useState, useEffect} from 'react';

function useLocalStorageState(key, defaultValue) {

  //Make piece of state based of value in local storage (or default value).
  // Use function in useState to figure out what to initialise state as. Here, based on what is in local storage.
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
    }
    catch (e) {
      val = defaultValue;
    }
    return val;
  })

  //Use useEffect to update local storage whenever piece of stage changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])
  return [state, setState];
}

export default useLocalStorageState;

// USECASE
// const [todos, setTodos] = useLocalStorageState('todos", [])
// const [mood, setMood] = useLocalStorageState('mood, 'happy)
// Therefore, mood will be set to happy initially in local storage. 
// If we had a button we could add an onClick event and call setMood and change it to something else.
// Use exactly the same as if it came directly from useState()

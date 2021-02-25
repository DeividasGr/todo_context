import { useState } from 'react';
import Context from './context';

function TaskListProvider({ children }) {
  const [todos, setTodos] = useState([
    { task: 'Read the book', id: 1 },
    { task: 'Wash the car', id: 2 },
    { task: 'Walk the dog', id: 3 },
  ]);

  return <Context.Provider value={{ todos }}>{children}</Context.Provider>;
}

export default TaskListProvider;

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Context from './context';

function TaskListProvider({ children }) {
  const [todos, setTodos] = useState([
    { task: 'Read the book', id: 1 },
    { task: 'Wash the car', id: 2 },
    { task: 'Walk the dog', id: 3 },
  ]);

  const addTask = (title) => {
    setTodos([...todos, { task: title, id: uuidv4() }]);
  };

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearList = () => {
    setTodos([]);
  };

  return (
    <Context.Provider value={{ todos, addTask, removeTask, clearList }}>
      {children}
    </Context.Provider>
  );
}

export default TaskListProvider;

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Context from './context';

function TaskListProvider({ children }) {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];

  const [todos, setTodos] = useState(initialState);

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTask = (title) => {
    setTodos([...todos, { task: title, id: uuidv4() }]);
  };

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearList = () => {
    setTodos([]);
  };

  const findItem = (id) => {
    const item = todos.find((todo) => todo.id === id);

    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTask = todos.map((todo) =>
      todo.id === id ? { title, id } : todo
    );

    setTodos(newTask);
    setEditItem(null);
  };

  return (
    <Context.Provider
      value={{
        todos,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default TaskListProvider;

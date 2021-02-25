import { useState } from 'react';
import Context from './context';

function TaskListProvider() {
  const [todo, setTodo] = useState([
    { task: 'Read the book', id: 1 },
    { task: 'Wash the car', id: 2 },
    { task: 'Walk the dog', id: 3 },
  ]);

  return <div>Task List Context</div>;
}

export default TaskListProvider;

import { useContext } from 'react';
import TaskListContext from '../contexts/TaskListContext';
import Task from './Task';

function TaskList() {
  const { todos } = useContext(TaskListContext.context);

  return (
    <div>
      <ul className="list">
        {todos.map((todo) => {
          return <Task key={todo.id} title={todo.task} />;
        })}
      </ul>
    </div>
  );
}

export default TaskList;

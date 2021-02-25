import { useContext } from 'react';
import TaskListContext from '../contexts/TaskListContext';
import Task from './Task';

function TaskList() {
  const { todos } = useContext(TaskListContext.context);
  console.log(todos);
  return (
    <div>
      <ul className="list">
        {todos.map((todo) => {
          return <Task title={todo.task} />;
        })}
      </ul>
    </div>
  );
}

export default TaskList;

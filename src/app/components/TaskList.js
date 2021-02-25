import { useContext } from 'react';
import TaskListContext from '../contexts/TaskListContext';
import Task from './Task';

function TaskList() {
  const { todos } = useContext(TaskListContext.context);

  return (
    <div>
      {todos.length ? (
        <ul className="list">
          {todos.map((todo) => {
            return <Task key={todo.id} todo={todo} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">There is no Todos</div>
      )}
    </div>
  );
}

export default TaskList;

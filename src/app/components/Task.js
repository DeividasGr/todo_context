import { useContext } from 'react';
import TaskListContext from '../contexts/TaskListContext';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

function Task({ todo }) {
  const { removeTask } = useContext(TaskListContext.context);

  const handleRemove = () => {
    removeTask(todo.id);
  };

  return (
    <li className="list-item">
      <span>{todo.task}</span>
      <div>
        <button onClick={handleRemove} className="btn-delete task-btn">
          <FaTrashAlt className="icon" />
        </button>
        <button className="btn-edit task-btn">
          <FaEdit className="icon" />
        </button>
      </div>
    </li>
  );
}

export default Task;

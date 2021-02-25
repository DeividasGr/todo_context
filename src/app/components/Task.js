import { useContext } from 'react';
import TaskListContext from '../contexts/TaskListContext';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

function Task({ todo }) {
  const { removeTask, findItem } = useContext(TaskListContext.context);

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
        <button onClick={() => findItem(todo.id)} className="btn-edit task-btn">
          <FaEdit className="icon" />
        </button>
      </div>
    </li>
  );
}

export default Task;

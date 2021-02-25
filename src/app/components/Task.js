import { FaTrashAlt, FaEdit } from 'react-icons/fa';

function Task({ title }) {
  return (
    <li className="list-item">
      <span>{title}</span>
      <div>
        <button className="btn-delete task-btn">
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

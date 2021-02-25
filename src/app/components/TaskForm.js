import { useContext, useState } from 'react';
import TaskListContext from '../contexts/TaskListContext';

function TaskForm() {
  const { addTask } = useContext(TaskListContext.context);
  const [title, setTitle] = useState('');

  const onValueChange = (e) => {
    setTitle(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    addTask(title);
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <input
        onChange={onValueChange}
        type="text"
        className="task-input"
        placeholder="Add Todo..."
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          Add Task
        </button>
        <button className="btn clear-btn">Clear</button>
      </div>
    </form>
  );
}

export default TaskForm;

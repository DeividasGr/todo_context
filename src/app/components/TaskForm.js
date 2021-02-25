import { useContext, useState, useEffect } from 'react';
import TaskListContext from '../contexts/TaskListContext';

function TaskForm() {
  const { addTask, clearList, editTask, editItem } = useContext(
    TaskListContext.context
  );
  const [title, setTitle] = useState('');

  const onValueChange = (e) => {
    setTitle(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.task);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <form onSubmit={onFormSubmit} className="form">
      <input
        onChange={onValueChange}
        value={title}
        type="text"
        className="task-input"
        placeholder="Add Todo..."
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button onClick={clearList} className="btn clear-btn">
          Clear
        </button>
      </div>
    </form>
  );
}

export default TaskForm;

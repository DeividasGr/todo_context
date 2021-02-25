import TaskList from './components/TaskList';
import TaskListContext from './contexts/TaskListContext';

function App() {
  return (
    <TaskListContext.Provider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContext.Provider>
  );
}

export default App;

import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import TaskListContext from './contexts/TaskListContext';

function App() {
  return (
    <TaskListContext.Provider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <Header />
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContext.Provider>
  );
}

export default App;

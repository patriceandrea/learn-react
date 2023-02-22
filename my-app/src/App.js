import './App.css';
import ProgressBar from './components/ProgressBar';
import ShowHideTitle from './components/ShowHideTitle';
import StopwatchTimer from './components/StopwatchTimer';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div>
      <ShowHideTitle />
      <StopwatchTimer />
      <ToDoList />
      <ProgressBar />
    </div>
  );
}

export default App;

import './App.css';
import Autocomplete from './components/Autocomplete';
import MaxCount from './components/MaxCount';
import ProgressBar from './components/ProgressBar';
import ShowHideTitle from './components/ShowHideTitle';
import StopwatchTimer from './components/StopwatchTimer';
import SubmitFormData from './components/SubmitFormData';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div>
      <ShowHideTitle />
      <StopwatchTimer />
      <ToDoList />
      <ProgressBar />
      <SubmitFormData/>  
      <Autocomplete/>
      <MaxCount/>
    
    </div>
  );
}

export default App;

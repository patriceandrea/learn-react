import "./App.css";
import Autocomplete from "./components/Autocomplete";
import MaxCount from "./components/MaxCount";
import ProgressBar from "./components/ProgressBar";
import ShowHideTitle from "./components/ShowHideTitle";
import StopwatchTimer from "./components/StopwatchTimer";
import SubmitFormData from "./components/SubmitFormData";
import ToDoList from "./components/ToDoList";
import InvalidateNumbers from "./components/InvalidateNumbers";

function App() {
  return (
    <div>     
      <InvalidateNumbers/>
      <Autocomplete />
      <MaxCount />
      <SubmitFormData />
      <ProgressBar />
      <ToDoList />
      <StopwatchTimer />
      <ShowHideTitle />
 
    </div>
  );
}

export default App;

import "./App.css";
import Autocomplete from "./components/Autocomplete";
import MaxCount from "./components/MaxCount";
import ProgressBar from "./components/ProgressBar";
import ShowHideTitle from "./components/ShowHideTitle";
import StopwatchTimer from "./components/StopwatchTimer";
import SubmitFormData from "./components/SubmitFormData";
import ToDoList from "./components/ToDoList";
import InvalidateNumbers from "./components/InvalidateNumbers";
import RemoveButton from "./components/RemoveButton";

function App() {
  return (
    <div>     
      <RemoveButton/>
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

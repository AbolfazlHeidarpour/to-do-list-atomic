import classes from './css/App.module.css';
import {NewToDo} from "./components/NewToDo";
import { toDoListAtom } from './atoms/toDoAtoms';
import { useAtomValue } from 'jotai';
import ToDoList from './components/ToDoList';

function App() {
  const toDoList = useAtomValue(toDoListAtom);

  return (
    <div className={classes.appContainer}>
      <NewToDo />
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;

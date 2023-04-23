import { FC } from 'react';
import {ToDoItem} from "./ToDoItem";
import classes from '../css/App.module.css';

interface IToDoListProps {
  readonly toDoList: string[];
}

const ToDoList: FC<IToDoListProps> = ({toDoList}) => (
  <ul className={classes.ToDoList}>
    {toDoList.map(d => (
      <ToDoItem
        item={d}
        key={d}
      />
    ))}
  </ul>
);

export default ToDoList;

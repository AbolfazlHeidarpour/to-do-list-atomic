import {FC, memo} from "react";
import classes from "../css/App.module.css";
import {AiFillEdit, AiOutlineClose} from "react-icons/ai";
import {MdEditOff} from "react-icons/md";
import useEditToDo from "../hooks/useEditToDo";
import useDeleteToDo from "../hooks/useDeleteToDo";
import { toDoListAtom } from "../atoms/toDoAtoms";

interface IToDoItemProps {
  readonly item: string;
}

export const ToDoItem: FC<IToDoItemProps> = memo(({item}) => {
  const {
    updatedItem,
    closeEdit,
    editOpen,
    openEdit,
    onChange,
    onKeyUp
  } = useEditToDo(item);
  const onDelete = useDeleteToDo(toDoListAtom);

  return (
    <li className={classes.ToDoItem}>
      <span className={classes.ToDoItemSpan}>
        {
          !editOpen ? (
            <AiFillEdit
              onClick={openEdit}
              color='dodgerblue'
              cursor='pointer'
            />
          ) : (
            <MdEditOff
              onClick={closeEdit}
              color='dodgerblue'
              cursor='pointer'
            />
          )
        }
        <AiOutlineClose
          onClick={() => onDelete(item)}
          cursor='pointer'
          color='red'
        />
      </span>
      {
        !editOpen ? (
          <p className={classes.Text}>{item}</p>
        ) : (
          <input
            onChange={onChange}
            value={updatedItem}
            onKeyUp={onKeyUp}
            style={{
              marginTop: 16,
              marginBottom: 16,
              width: 244
            }}
          />
        )
      }
    </li>
  );
});
import { useSetAtom } from "jotai";
import {ChangeEventHandler, KeyboardEventHandler, useState} from "react";
import { toDoListAtom } from "../atoms/toDoAtoms";

export default function useEditToDo(item: string) {
  const [editOpen, setEditOpen] = useState(false);
  const [updatedItem, setUpdatedItem] = useState(item);
  const setToDoList = useSetAtom(toDoListAtom);

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const {target: {value}} = e;
    setUpdatedItem(value);
  };

  const onUpdate = (prevToDo: string, newToDo: string) => {
    const handleUpdate = (prev: string[]) => {
      const findIndex = prev.findIndex(d => d.toLowerCase().trim() === prevToDo.toLowerCase().trim());

      if (findIndex < 0)
        return prev;

      const newData = [...prev];
      newData[findIndex] = newToDo;

      return newData;
    }

    setToDoList(handleUpdate);
  };

  const onKeyUp: KeyboardEventHandler<HTMLInputElement> = e => {
    const {key} = e;

    if (key === 'Enter')
      onUpdate(item, updatedItem);
  };

  const openEdit = () => setEditOpen(true);

  const closeEdit = () => {
    setEditOpen(false);
    setUpdatedItem(item);
  };

  return {
    updatedItem,
    closeEdit,
    editOpen,
    openEdit,
    onChange,
    onKeyUp
  };
}
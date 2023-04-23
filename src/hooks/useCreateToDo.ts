import { useAtom, PrimitiveAtom, useSetAtom } from "jotai";
import {ChangeEventHandler, KeyboardEventHandler, useMemo} from "react";
import { RessetableAtom } from "../atomDefinitions";

export default function useCreateToDo(newToDoAtom: RessetableAtom<string>, toDoListAtom: PrimitiveAtom<string[]>) {
  const [newToDo, setNewToDo] = useAtom(newToDoAtom);
  const isDisabled = useMemo(() => newToDo.length <= 0, [newToDo]);
  const setToDoList = useSetAtom(toDoListAtom);

  const onAddNewToDo = (newItem: string) => {
    const handleAdd = (toDoList: string[]) => {
      const findIndex = toDoList.findIndex(d => d.toLowerCase().trim() === newItem.toLowerCase().trim());

      if (findIndex < 0) {
        return toDoList.concat(newItem);
      }

      return toDoList;
    };

    setToDoList(handleAdd);
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const {target: {value}} = e;

    setNewToDo(value);
  };

  const onAddToDoClick = () => onAddNewToDo(newToDo);

  const onKeyUp: KeyboardEventHandler<HTMLInputElement> = e => {
    const {key} = e;

    if (key === 'Enter')
      onAddNewToDo(newToDo);
  };

  return {
    onAddToDoClick,
    isDisabled,
    onChange,
    onKeyUp,
    newToDo
  };
}
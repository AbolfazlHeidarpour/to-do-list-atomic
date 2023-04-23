import { PrimitiveAtom, useSetAtom } from "jotai";

export default function useDeleteToDo(atom: PrimitiveAtom<string[]>) {
  const setToDoList = useSetAtom(atom);

  return (toDo: string) => {
    const handleDelete = (prev: string[]) => {
      console.log(toDo, prev, prev.filter(d => d.toLowerCase().trim() !== toDo.toLowerCase().trim()))
      return prev.filter(d => d.toLowerCase().trim() !== toDo.toLowerCase().trim());
    };

    setToDoList(handleDelete);
  };
}
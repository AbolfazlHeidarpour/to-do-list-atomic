import { atom } from 'jotai';
import {atomWithReset} from 'jotai/utils';

export const addToDoAtom = atomWithReset('');
export const toDoListAtom = atom<string[]>([]);
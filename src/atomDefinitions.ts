import { RESET } from "jotai/utils";
import {WritableAtom} from 'jotai';

export type SetStateActionWithReset<T> = T | typeof RESET | ((prev: T) => T | typeof RESET);
export type RessetableAtom<T> = WritableAtom<T, [SetStateActionWithReset<T>], void>;
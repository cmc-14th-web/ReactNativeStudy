import { atom } from "recoil";
import { StorageKeys } from "./storageKeys";
import { Todos } from "../../types/todo";
import { v4 as uuidv4 } from "uuid";

export const todoState = atom<Todos>({
  key: `${StorageKeys.TodoList}${uuidv4}`,
  default: {},
});

import {create} from 'zustand';
import colors from '../styles/color';
import {TodoProps} from '../types/Home/Home';

interface StoreState {
  color: string;
  todos: TodoProps[];
  todoText: string;
}

interface StoreAction {
  setColor: (color: string) => void;
  setTodoText: (todoText: string) => void;
  setTodos: (todo: TodoProps[]) => void;
}

export const useStore = create<StoreState & StoreAction>(set => ({
  color: colors.orange,
  todos: [],
  todoText: '',
  setColor: (state: string) => set({color: state}),
  setTodoText: (state: string) => set({todoText: state}),
  setTodos: (state: TodoProps[]) => set({todos: [...state]}),
}));

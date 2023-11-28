import {create} from 'zustand';
import colors from '../styles/color';

interface TodoProps {
  prevTodos: TodoProps[];
  todo: string;
  isDone: boolean;
}

interface StoreState {
  color: string;
  todos: TodoProps[];
  todoText: string;
}

interface StoreAction {
  setColor: (color: string) => void;
  setTodos: (todo: TodoProps) => void;
  setTodoText: (todoText: string) => void;
}

export const useStore = create<StoreState & StoreAction>(set => ({
  color: colors.orange,
  todos: [],
  todoText: '',
  setColor: (state: string) => set({color: state}),
  setTodos: (state: TodoProps) => set({todos: [...state.prevTodos, state]}),
  setTodoText: (state: string) => set({todoText: state}),
}));

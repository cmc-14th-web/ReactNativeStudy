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
}

interface StoreAction {
  setColor: (color: string) => void;
  setTodos: (todo: TodoProps) => void;
}

export const useStore = create<StoreState & StoreAction>(set => ({
  color: colors.orange,
  todos: [],
  setColor: (state: string) => set({color: state}),
  setTodos: (state: TodoProps) => set({todos: [...state.prevTodos, state]}),
}));

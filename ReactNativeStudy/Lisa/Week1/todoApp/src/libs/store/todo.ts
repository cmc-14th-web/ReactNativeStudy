import {atom} from 'recoil';

import {TodoItemPropsType} from 'components/atoms/TodoItem';

type TodoStateType = {
  todo: TodoItemPropsType[];
  newTodo: string;
  removeTodo: number;
};

const initialState: TodoStateType = {
  todo: [],
  newTodo: '',
  removeTodo: 0,
};

export const todoState = atom<TodoStateType>({
  key: 'todoState',
  default: initialState,
});

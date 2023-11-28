import {TodoItemPropsType} from 'components/atoms/TodoItem';
import {atom} from 'recoil';

type TodoListStateType = {
  todo: TodoItemPropsType[];
  newTodo: string;
  removeTodo: number;
};

const initialState: TodoListStateType = {
  todo: [],
  newTodo: '',
  removeTodo: 0,
};

export const todoListState = atom<TodoListStateType>({
  key: 'todoListState',
  default: initialState,
});

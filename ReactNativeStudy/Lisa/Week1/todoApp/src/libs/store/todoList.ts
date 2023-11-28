import {TodoItemPropsType} from 'components/atoms/TodoItem';
import {atom} from 'recoil';

type TodoListStateType = {
  todo: TodoItemPropsType[];
  newTodo: string;
};

const initialState: TodoListStateType = {
  todo: [],
  newTodo: '',
};

export const todoListState = atom<TodoListStateType>({
  key: 'todoListState',
  default: initialState,
});

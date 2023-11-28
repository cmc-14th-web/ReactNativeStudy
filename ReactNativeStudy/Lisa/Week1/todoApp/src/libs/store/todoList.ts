import {TodoItemPropsType} from 'components/atoms/TodoItem';
import {atom} from 'recoil';

type TodoListStateType = {
  todo: TodoItemPropsType[];
};

const initialState: TodoListStateType = {
  todo: [
    {
      id: 1,
      todo: '아침 먹기',
      done: false,
    },
    {
      id: 2,
      todo: '점심 먹기',
      done: true,
    },
    {
      id: 3,
      todo: '저녁 먹기',
      done: false,
    },
    {
      id: 4,
      todo: '아침 먹기',
      done: false,
    },
  ],
};

export const todoListState = atom<TodoListStateType>({
  key: 'todoListState',
  default: initialState,
});

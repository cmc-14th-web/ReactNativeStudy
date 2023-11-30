import {atom} from 'recoil';
import {IToDo} from '../../../types/todo';

// 할 일 목록 저장
export const todoState = atom<IToDo[]>({
  key: 'todoState',
  default: [],
});

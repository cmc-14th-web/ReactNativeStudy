import {atom} from 'recoil';

export type todoStateType = {
  id: number;
  content: string;
  done: boolean;
};

const todoState = atom<todoStateType[]>({
  key: 'todoState',
  default: [],
});

export default todoState;

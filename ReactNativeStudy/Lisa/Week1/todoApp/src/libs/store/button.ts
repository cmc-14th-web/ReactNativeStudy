import {atom} from 'recoil';

type ButtonStateType = {
  isBottomTabFloatingButtonVisible: boolean;
};

const initialState: ButtonStateType = {
  isBottomTabFloatingButtonVisible: true,
};

export const buttonState = atom<ButtonStateType>({
  key: 'buttonState',
  default: initialState,
});

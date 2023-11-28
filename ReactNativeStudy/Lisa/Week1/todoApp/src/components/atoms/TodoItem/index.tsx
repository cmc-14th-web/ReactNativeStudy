import {View, Text} from 'react-native';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components/native';
import {KeyOfPalette, theme} from 'styles';

import CheckIcon from 'assets/icons/CheckIcon';
import CircleIcon from 'assets/icons/CircleIcon';
import TrashIcon from 'assets/icons/TrashIcon';
import {colorState} from 'libs/store/color';

export type TodoItemPropsType = {
  id: number;
  todo: string;
  done: boolean;
};

const TodoItem = ({todo, done, id}: TodoItemPropsType) => {
  const colorData = useRecoilValue(colorState);

  const renderIcon = () => {
    if (done) {
      return <CheckIcon id={id} />;
    } else {
      return <CircleIcon fill={colorData.color} id={id} />;
    }
  };

  return (
    <TodoItemWrapper done={done} color={colorData.color}>
      {renderIcon()}
      <StyledText done={done}>{todo}</StyledText>
      <TrashIcon fill={done ? 'white' : colorData.color} id={id} />
    </TodoItemWrapper>
  );
};

export default TodoItem;

const TodoItemWrapper = styled(View)<{color: KeyOfPalette; done: boolean}>`
  height: 56px;
  border-radius: 20px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 16px 20px;
  background-color: ${({done, color}) =>
    done ? theme.palette[color] : theme.palette.white};
`;

const StyledText = styled(Text)<{done: boolean}>`
  ${theme.typo.body};
  color: ${({done}) => (done ? theme.palette.white : theme.palette.black)};
  flex: 1;
`;

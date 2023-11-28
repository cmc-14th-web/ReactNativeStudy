import CheckIcon from 'assets/icons/CheckIcon';
import CircleIcon from 'assets/icons/CircleIcon';
import TrashIcon from 'assets/icons/TrashIcon';
import {colorState} from 'libs/store/color';
import {TouchableOpacity, Text} from 'react-native';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components';
import {KeyOfPalette, theme} from 'styles';

type TodoItemPropsType = {
  todo: string;
  isComplete: boolean;
};

const TodoItem = ({todo, isComplete}: TodoItemPropsType) => {
  const colorData = useRecoilValue(colorState);

  const renderIcon = () => {
    if (isComplete) {
      return <CheckIcon />;
    } else {
      return <CircleIcon fill={colorData.color} />;
    }
  };

  return (
    <TodoItemWrapper isComplete={isComplete} color={colorData.color}>
      {renderIcon()}
      <StyledText isComplete={isComplete}>{todo}</StyledText>
      <TrashIcon fill={isComplete ? 'white' : colorData.color} />
    </TodoItemWrapper>
  );
};

export default TodoItem;

const TodoItemWrapper = styled(TouchableOpacity)<{
  color: KeyOfPalette;
  isComplete: boolean;
}>`
  height: 56px;
  border-radius: 20px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 16px 20px;
  background-color: ${({isComplete, color}) =>
    isComplete ? theme.palette[color] : theme.palette.white};
`;

const StyledText = styled(Text)<{isComplete: boolean}>`
  ${theme.typo.body};
  color: ${({isComplete}) =>
    isComplete ? theme.palette.white : theme.palette.black};
  flex: 1;
`;

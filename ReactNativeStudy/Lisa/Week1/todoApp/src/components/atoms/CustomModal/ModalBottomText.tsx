import {todoState} from 'libs/store/todo';
import {useRecoilValue} from 'recoil';
import {Text, TouchableOpacity} from 'react-native';

import {CustomModalVariant} from '.';
import useSetTodoListData from 'libs/hooks/useSetTodoListData';
import useSetModalData from 'libs/hooks/useSetModalData';
import useNavigator from 'libs/hooks/useNavigator';
import styled from 'styled-components/native';

const ModalBottomText = ({
  variant,
  handlePressAddTodoConfirm,
}: {
  variant: CustomModalVariant;
  handlePressAddTodoConfirm: () => void;
}) => {
  const todoData = useRecoilValue(todoState);
  const {updateTodoList} = useSetTodoListData();
  const {setRemoveTodoModalVisible} = useSetModalData();
  const {stackNavigation} = useNavigator();

  const handlePressRemoveTodoConfirm = () => {
    const updatedTodoListData = Array.isArray(todoData.todo)
      ? todoData.todo.filter(todo => todo.id !== todoData.removeTodo)
      : [];

    updateTodoList(updatedTodoListData);
    setRemoveTodoModalVisible(false);
    stackNavigation.navigate('Home');
  };

  const handlePressRemoveTodoCancel = () => {
    setRemoveTodoModalVisible(false);
  };

  if (variant === 'addTodo') {
    return (
      <TouchableOpacity onPress={handlePressAddTodoConfirm}>
        <StyledText>확인</StyledText>
      </TouchableOpacity>
    );
  } else {
    return (
      <>
        <StyledButton onPress={handlePressRemoveTodoCancel}>
          <StyledButtonText isCancel={true}>취소</StyledButtonText>
        </StyledButton>
        <StyledButton onPress={handlePressRemoveTodoConfirm}>
          <StyledButtonText>확인</StyledButtonText>
        </StyledButton>
      </>
    );
  }
};

export default ModalBottomText;

const StyledText = styled(Text)`
  color: #fafafa;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 300;
`;

const StyledButton = styled(TouchableOpacity)`
  flex: 1;
`;

const StyledButtonText = styled(StyledText)<{isCancel?: boolean}>`
  text-align: center;
  border-right-width: ${({isCancel}) => (isCancel ? '0.5px' : '0')};
  border-right-color: #fafafa;
  height: 100%;
  line-height: 33px;
`;

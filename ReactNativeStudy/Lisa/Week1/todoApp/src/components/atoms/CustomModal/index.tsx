import {View, Modal, Text, TouchableOpacity} from 'react-native';
import {useRecoilValue} from 'recoil';
import styled from 'styled-components/native';

import {todoListState} from 'libs/store/todoList';
import useSetTodoListData from 'libs/hooks/useSetTodoListData';
import useSetModalData from 'libs/hooks/useSetModalData';
import useNavigator from 'libs/hooks/useNavigator';
import useSetButtonData from 'libs/hooks/useSetButtonData';

type CustomModalVariant = 'removeTodo' | 'addTodo';

type CustomModalPropsType = {
  variant: CustomModalVariant;
};

const CustomModal = ({variant}: CustomModalPropsType) => {
  const {stackNavigation} = useNavigator();
  const todoListData = useRecoilValue(todoListState);
  const {addNewTodo, updateTodoList} = useSetTodoListData();
  const {setAddTodoModalVisible, setRemoveTodoModalVisible} = useSetModalData();
  const {setBottomTabFloatingButtonVisible} = useSetButtonData();

  const handlePressAddTodoConfirm = () => {
    addNewTodo();
    setAddTodoModalVisible(false);
    setBottomTabFloatingButtonVisible(true);
    stackNavigation.navigate('Home');
  };

  const handlePressRemoveTodoConfirm = () => {
    const updatedTodoListData = Array.isArray(todoListData.todo)
      ? todoListData.todo.filter(todo => todo.id !== todoListData.removeTodo)
      : [];

    updateTodoList(updatedTodoListData);
    setRemoveTodoModalVisible(false);
    stackNavigation.navigate('Home');
  };

  const handlePressRemoveTodoCancel = () => {
    setRemoveTodoModalVisible(false);
  };

  const handleCloseModal = () => {
    if (variant === 'removeTodo') {
      setRemoveTodoModalVisible(false);
    } else {
      handlePressAddTodoConfirm();
      setAddTodoModalVisible(false);
    }
  };

  const renderTopText = () => {
    if (variant === 'addTodo') {
      return <StyledText>할일이 추가되었습니다!</StyledText>;
    } else {
      return <StyledText>정말 삭제하시겠습니까?</StyledText>;
    }
  };

  const renderBottomText = () => {
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

  return (
    <CustomModalWrapper>
      <Modal
        visible={true}
        transparent={true}
        onRequestClose={handleCloseModal}>
        <StyledView onPress={handleCloseModal}>
          <ModalWrapper>
            <ModalTopWrapper>{renderTopText()}</ModalTopWrapper>
            <ModalBottomWrapper variant={variant}>
              {renderBottomText()}
            </ModalBottomWrapper>
          </ModalWrapper>
        </StyledView>
      </Modal>
    </CustomModalWrapper>
  );
};

export default CustomModal;

const CustomModalWrapper = styled(View)`
  width: 100%;
`;

const StyledView = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled(View)`
  width: 246px;
  height: 85px;
  border-radius: 20px;
  background-color: #525252;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -42.5px;
  margin-left: -123px;
`;

const ModalTopWrapper = styled(View)`
  width: 100%;
  height: 52px;
  border-bottom-width: 0.5px;
  border-bottom-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBottomWrapper = styled(View)<{variant: CustomModalVariant}>`
  width: 100%;
  height: 33px;
  display: flex;
  flex-direction: ${({variant}) =>
    variant === 'removeTodo' ? 'row' : 'column'};
  justify-content: center;
  align-items: center;
`;

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

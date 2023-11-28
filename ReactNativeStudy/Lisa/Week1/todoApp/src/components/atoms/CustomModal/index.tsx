import {NavigationProp, useNavigation} from '@react-navigation/native';
import {View, Modal, Text, TouchableOpacity} from 'react-native';
import {useRecoilState, useSetRecoilState} from 'recoil';
import styled from 'styled-components/native';

import {modalState} from 'libs/store/modal';
import {todoListState} from 'libs/store/todoList';
import {RootStackParamList} from 'navigator/StackNavigator';

type CustomModalVariant = 'removeTodo' | 'addTodo';

type CustomModalPropsType = {
  variant: CustomModalVariant;
};

const CustomModal = ({variant}: CustomModalPropsType) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const setModalData = useSetRecoilState(modalState);
  const [todoListData, setTodoListData] = useRecoilState(todoListState);

  const handlePressAddTodoConfirm = () => {
    setTodoListData(prevState => ({
      ...prevState,
      todo: [
        ...prevState.todo,
        {id: new Date().getTime(), todo: prevState.newTodo, done: false},
      ],
    }));
    setModalData(prevState => ({
      ...prevState,
      isAddTodoVisible: false,
    }));
    navigation.navigate('Home');
  };

  const handlePressRemoveTodoConfirm = () => {
    const updatedTodoList = Array.isArray(todoListData.todo)
      ? todoListData.todo.filter(todo => todo.id !== todoListData.removeTodo)
      : [];

    setTodoListData(prevState => ({...prevState, todo: updatedTodoList}));

    setModalData(prevState => ({
      ...prevState,
      isRemoveTodoVisible: false,
    }));
    navigation.navigate('Home');
  };

  const handlePressRemoveTodoCancel = () => {
    setModalData(prevState => ({
      ...prevState,
      isRemoveTodoVisible: false,
    }));
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
    <View style={{width: '100%'}}>
      <Modal visible={true} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <ModalWrapper>
            <ModalTopWrapper>{renderTopText()}</ModalTopWrapper>
            <ModalBottomWrapper variant={variant}>
              {renderBottomText()}
            </ModalBottomWrapper>
          </ModalWrapper>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;

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

import {View, Modal, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import useSetTodoListData from 'libs/hooks/useSetTodoListData';
import useSetModalData from 'libs/hooks/useSetModalData';
import useNavigator from 'libs/hooks/useNavigator';
import useSetButtonData from 'libs/hooks/useSetButtonData';
import ModalTopText from './ModalTopText';
import ModalBottomText from './ModalBottomText';

export type CustomModalVariant = 'removeTodo' | 'addTodo';

type CustomModalPropsType = {
  variant: CustomModalVariant;
};

const CustomModal = ({variant}: CustomModalPropsType) => {
  const {stackNavigation} = useNavigator();
  const {addNewTodo} = useSetTodoListData();
  const {setAddTodoModalVisible, setRemoveTodoModalVisible} = useSetModalData();
  const {setBottomTabFloatingButtonVisible} = useSetButtonData();

  const handlePressAddTodoConfirm = () => {
    addNewTodo();
    setAddTodoModalVisible(false);
    setBottomTabFloatingButtonVisible(true);
    stackNavigation.navigate('Home');
  };

  const handleCloseModal = () => {
    if (variant === 'removeTodo') {
      setRemoveTodoModalVisible(false);
    } else {
      handlePressAddTodoConfirm();
      setAddTodoModalVisible(false);
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
            <ModalTopWrapper>
              <ModalTopText variant={variant} />
            </ModalTopWrapper>
            <ModalBottomWrapper variant={variant}>
              <ModalBottomText
                variant={variant}
                handlePressAddTodoConfirm={handlePressAddTodoConfirm}
              />
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

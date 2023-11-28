import {useSetRecoilState} from 'recoil';

import {modalState} from 'libs/store/modal';

const useSetModalData = () => {
  const setModalData = useSetRecoilState(modalState);

  const setAddTodoModalVisible = (isAddTodoVisibleData: boolean) => {
    setModalData(prevState => ({
      ...prevState,
      isAddTodoVisible: isAddTodoVisibleData,
    }));
  };

  const setRemoveTodoModalVisible = (isRemoveTodoVisibleData: boolean) => {
    setModalData(prevState => ({
      ...prevState,
      isRemoveTodoVisible: isRemoveTodoVisibleData,
    }));
  };

  return {setAddTodoModalVisible, setRemoveTodoModalVisible};
};

export default useSetModalData;

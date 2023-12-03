import {useRecoilValue} from 'recoil';

import {modalState} from 'libs/store/modal';
import CustomModal from 'components/atoms/CustomModal';

const ModalContainer = () => {
  const modalData = useRecoilValue(modalState);

  return (
    <>
      {modalData.isRemoveTodoVisible && <CustomModal variant={'removeTodo'} />}
      {modalData.isAddTodoVisible && <CustomModal variant={'addTodo'} />}
    </>
  );
};

export default ModalContainer;

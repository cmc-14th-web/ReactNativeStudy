import {TouchableOpacity} from 'react-native';
import {useRecoilValue} from 'recoil';

import useSetTodoListData from 'libs/hooks/useSetTodoListData';
import useSetModalData from 'libs/hooks/useSetModalData';
import TrashIcon from 'assets/icons/TrashIcon';
import {colorState} from 'libs/store/color';

const Trash = ({done, id}: {done: boolean; id: number}) => {
  const {setRemoveTodoId} = useSetTodoListData();
  const {setRemoveTodoModalVisible} = useSetModalData();
  const colorData = useRecoilValue(colorState);

  const handlePressTrashIcon = () => {
    setRemoveTodoId(id);
    setRemoveTodoModalVisible(true);
  };

  return (
    <TouchableOpacity onPress={handlePressTrashIcon}>
      <TrashIcon fill={done ? 'white' : colorData.color} />
    </TouchableOpacity>
  );
};

export default Trash;

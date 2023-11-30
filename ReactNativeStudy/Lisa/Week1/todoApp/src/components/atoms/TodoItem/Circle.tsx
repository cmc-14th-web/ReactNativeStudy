import {TouchableOpacity} from 'react-native';
import {useRecoilValue} from 'recoil';

import {todoListState} from 'libs/store/todoList';
import useSetTodoListData from 'libs/hooks/useSetTodoListData';
import CircleIcon from 'assets/icons/CircleIcon';
import {colorState} from 'libs/store/color';

const Circle = ({id}: {id: number}) => {
  const todoListData = useRecoilValue(todoListState);
  const {updateTodoList} = useSetTodoListData();
  const colorData = useRecoilValue(colorState);

  const handlePressCircleIcon = () => {
    const updatedTodoList = Array.isArray(todoListData.todo)
      ? todoListData.todo.map(todo =>
          todo.id === id ? {...todo, done: true} : todo,
        )
      : [];

    updateTodoList(updatedTodoList);
  };

  return (
    <TouchableOpacity onPress={handlePressCircleIcon}>
      <CircleIcon fill={colorData.color} />
    </TouchableOpacity>
  );
};

export default Circle;

import {TouchableOpacity} from 'react-native';
import {useRecoilValue} from 'recoil';

import {todoState} from 'libs/store/todo';
import useSetTodoListData from 'libs/hooks/useSetTodoListData';
import CircleIcon from 'assets/icons/CircleIcon';
import {colorState} from 'libs/store/color';

const Circle = ({id}: {id: number}) => {
  const todoData = useRecoilValue(todoState);
  const {updateTodoList} = useSetTodoListData();
  const colorData = useRecoilValue(colorState);

  const handlePressCircleIcon = () => {
    const updatedTodoList = Array.isArray(todoData.todo)
      ? todoData.todo.map(todo =>
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

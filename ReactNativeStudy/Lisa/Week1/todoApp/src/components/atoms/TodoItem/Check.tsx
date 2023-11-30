import {TouchableOpacity} from 'react-native';
import {useRecoilValue} from 'recoil';

import {todoState} from 'libs/store/todo';
import useSetTodoListData from 'libs/hooks/useSetTodoListData';
import CheckIcon from 'assets/icons/CheckIcon';

const Check = ({id}: {id: number}) => {
  const todoData = useRecoilValue(todoState);
  const {updateTodoList} = useSetTodoListData();

  const handlePressCheckIcon = () => {
    const updatedTodoList = Array.isArray(todoData.todo)
      ? todoData.todo.map(todo =>
          todo.id === id ? {...todo, done: false} : todo,
        )
      : [];

    updateTodoList(updatedTodoList);
  };

  return (
    <TouchableOpacity onPress={handlePressCheckIcon}>
      <CheckIcon />
    </TouchableOpacity>
  );
};

export default Check;

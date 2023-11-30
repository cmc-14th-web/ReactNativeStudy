import {TouchableOpacity} from 'react-native';
import {useRecoilValue} from 'recoil';

import {todoListState} from 'libs/store/todoList';
import useSetTodoListData from 'libs/hooks/useSetTodoListData';
import CheckIcon from 'assets/icons/CheckIcon';

const Check = ({id}: {id: number}) => {
  const todoListData = useRecoilValue(todoListState);
  const {updateTodoList} = useSetTodoListData();

  const handlePressCheckIcon = () => {
    const updatedTodoList = Array.isArray(todoListData.todo)
      ? todoListData.todo.map(todo =>
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

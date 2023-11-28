import {useSetRecoilState} from 'recoil';

import {todoListState} from 'libs/store/todoList';
import {TodoItemPropsType} from 'components/atoms/TodoItem';

const useSetTodoListData = () => {
  const setTodoListData = useSetRecoilState(todoListState);

  const addNewTodoTitle = (newTodoData: string) => {
    setTodoListData(prevState => ({...prevState, newTodo: newTodoData}));
  };

  const addNewTodo = () => {
    setTodoListData(prevState => ({
      ...prevState,
      todo: [
        ...prevState.todo,
        {id: new Date().getTime(), todo: prevState.newTodo, done: false},
      ],
    }));
  };

  const updateTodoList = (updatedTodoList: TodoItemPropsType[]) => {
    setTodoListData(prevState => ({...prevState, todo: updatedTodoList}));
  };

  return {addNewTodoTitle, addNewTodo, updateTodoList};
};

export default useSetTodoListData;

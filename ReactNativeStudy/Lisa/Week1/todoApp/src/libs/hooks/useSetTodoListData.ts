import {useSetRecoilState} from 'recoil';

import {todoState} from 'libs/store/todo';
import {TodoItemPropsType} from 'components/atoms/TodoItem';

const useSetTodoListData = () => {
  const setTodoData = useSetRecoilState(todoState);

  const addNewTodoTitle = (newTodoData: string) => {
    setTodoData(prevState => ({...prevState, newTodo: newTodoData}));
  };

  const addNewTodo = () => {
    setTodoData(prevState => ({
      ...prevState,
      todo: [
        ...prevState.todo,
        {id: new Date().getTime(), todo: prevState.newTodo, done: false},
      ],
    }));
  };

  const setRemoveTodoId = (removeTodoId: number) => {
    setTodoData(prevState => ({
      ...prevState,
      removeTodo: removeTodoId,
    }));
  };

  const updateTodoList = (updatedTodoList: TodoItemPropsType[]) => {
    setTodoData(prevState => ({...prevState, todo: updatedTodoList}));
  };

  return {addNewTodoTitle, addNewTodo, setRemoveTodoId, updateTodoList};
};

export default useSetTodoListData;

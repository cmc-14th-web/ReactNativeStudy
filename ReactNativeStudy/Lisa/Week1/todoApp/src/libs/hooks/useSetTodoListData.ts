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

  const setRemoveTodoId = (removeTodoId: number) => {
    setTodoListData(prevState => ({
      ...prevState,
      removeTodo: removeTodoId,
    }));
  };

  const updateTodoList = (updatedTodoList: TodoItemPropsType[]) => {
    setTodoListData(prevState => ({...prevState, todo: updatedTodoList}));
  };

  return {addNewTodoTitle, addNewTodo, setRemoveTodoId, updateTodoList};
};

export default useSetTodoListData;

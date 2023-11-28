import {useRecoilValue} from 'recoil';
import {useEffect} from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components';
import {theme} from 'styles/theme';

import {todoListState} from 'libs/store/todoList';
import useSetTodoListData from 'libs/hooks/useSetTodoListData';

const AddTodoInput = () => {
  const todoListData = useRecoilValue(todoListState);

  const {addNewTodoTitle} = useSetTodoListData();

  const handleChangeTodoText = (newTodoData: string) => {
    if (!newTodoData.length) {
      return;
    }

    addNewTodoTitle(newTodoData);
  };

  useEffect(() => {
    addNewTodoTitle('');
  }, []);

  return (
    <StyledTextInput
      value={todoListData.newTodo}
      onChangeText={handleChangeTodoText}
    />
  );
};

export default AddTodoInput;

const StyledTextInput = styled(TextInput)`
  ${theme.typo.body};
  padding: 16px 29px;
  border-radius: 20px;
  background-color: ${theme.palette.white};
  color: ${theme.palette.black};
`;

import {useRecoilValue} from 'recoil';
import {useEffect} from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components';
import {theme} from 'styles/theme';

import {todoState} from 'libs/store/todo';
import useSetTodoListData from 'libs/hooks/useSetTodoListData';

const AddTodoInput = () => {
  const todoData = useRecoilValue(todoState);

  const {addNewTodoTitle} = useSetTodoListData();

  const handleChangeTodoText = (newTodoData: string) => {
    addNewTodoTitle(newTodoData);
  };

  useEffect(() => {
    addNewTodoTitle('');
  }, []);

  return (
    <StyledTextInput
      value={todoData.newTodo}
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

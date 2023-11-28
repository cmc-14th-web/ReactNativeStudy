import {useRecoilState} from 'recoil';
import {useEffect} from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components';
import {theme} from 'styles/theme';

import {todoListState} from 'libs/store/todoList';

const AddTodoInput = () => {
  const [todoListData, setTodoListData] = useRecoilState(todoListState);

  const handleChangeTodoText = (newTodoData: string) => {
    if (!newTodoData.length) {
      return;
    }

    setTodoListData(prevState => ({...prevState, newTodo: newTodoData}));
  };

  useEffect(() => {
    setTodoListData(prevState => ({...prevState, newTodo: ''}));
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

import {View} from 'react-native';
import styled from 'styled-components';

import AddTodoInput from 'components/atoms/AddTodoInput';

const AddTodo = () => {
  return (
    <AddTodoWrapper>
      <AddTodoInput />
    </AddTodoWrapper>
  );
};

export default AddTodo;

const AddTodoWrapper = styled(View)`
  padding: 19px 32px;
`;

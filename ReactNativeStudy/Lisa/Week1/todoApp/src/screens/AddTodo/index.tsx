import {View} from 'react-native';
import styled from 'styled-components';

import AddTodoInput from 'components/atoms/AddTodoInput';
import useSetButtonData from 'libs/hooks/useSetButtonData';

const AddTodo = () => {
  const {useSetBottomTabFloatingButtonVisible} = useSetButtonData();

  useSetBottomTabFloatingButtonVisible(false);

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

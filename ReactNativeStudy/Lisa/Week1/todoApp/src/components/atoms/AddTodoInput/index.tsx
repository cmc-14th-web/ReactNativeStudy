import {TextInput} from 'react-native';
import styled from 'styled-components';
import {theme} from 'styles/theme';

const AddTodoInput = () => {
  return <StyledTextInput />;
};

export default AddTodoInput;

const StyledTextInput = styled(TextInput)`
  ${theme.typo.body};
  padding: 16px 29px;
  border-radius: 20px;
  background-color: ${theme.palette.white};
  color: ${theme.palette.black};
`;

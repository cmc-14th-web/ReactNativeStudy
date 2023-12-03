import styled from 'styled-components/native';
import colors from '../color';

export const Wrap = styled.View`
  margin-horizontal: 32;
  background-color: ${colors.white};
  border-radius: 20px;
  margin-top: 20;
`;

export const TextInput = styled.TextInput`
  padding-horizontal: 30;
  padding-vertical: 16;
  font-size: 18;
`;

export const AddTodoButton = styled.TouchableOpacity<{bottom: number}>`
  position: absolute;
  align-self: center;
  bottom: ${props => props.bottom};
`;

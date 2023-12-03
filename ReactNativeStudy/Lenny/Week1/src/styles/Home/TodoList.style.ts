import styled from 'styled-components/native';
import colors from '../color';

interface TodoTextProps {
  isDone: boolean;
}

interface TodoColorProps extends TodoTextProps {
  color: string;
}

export const Container = styled.View<TodoColorProps>`
  padding-vertical: 16;
  padding-horizontal: 20;
  border-radius: 20px;
  background-color: ${props => (props.isDone ? props.color : colors.white)};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18;
`;

export const Wrap = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text<TodoTextProps>`
  color: ${props => (props.isDone ? colors.white : colors.black)};
  font-size: 18;
  margin-left: 10;
`;

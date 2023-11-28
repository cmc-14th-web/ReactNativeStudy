import styled from 'styled-components/native';
import colors from '../color';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.gray};
  padding-top: 25;
`;

export const FlatList = styled.FlatList`
  width: 100%;
  padding-horizontal: 32;
`;

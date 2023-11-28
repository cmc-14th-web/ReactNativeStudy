import styled from 'styled-components/native';
import colors from '../color';

interface ColorProps {
  themeColor: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.gray};
`;

export const Text = styled.Text`
  padding-horizontal: 32;
  padding-vertical: 16;
  font-size: 18;
`;

export const Wrap = styled.View`
  flex-direction: row;
  padding-horizontal: 65.5;
  padding-vertical: 16;
  justify-content: space-between;
`;

export const SelectColor = styled.TouchableOpacity<ColorProps>`
  background-color: ${props => props.themeColor};
  width: 30;
  height: 30;
  border-radius: 100px;
`;

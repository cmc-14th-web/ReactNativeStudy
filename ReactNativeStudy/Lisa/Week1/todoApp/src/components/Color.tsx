import {View} from 'react-native';
import styled from 'styled-components/native';
import {KeyOfPalette, theme} from 'styles';

const Color = ({color}: {color: KeyOfPalette}) => {
  return <ColorWrapper color={color} />;
};

export default Color;

const ColorWrapper = styled(View)<{color: KeyOfPalette}>`
  width: 30px;
  height: 30px;
  background-color: ${({color}) => theme.palette[color]};
  border-radius: 15px;
`;

import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {KeyOfPalette, theme} from 'styles';

const Color = ({
  color,
  onClick,
}: {
  color: KeyOfPalette;
  onClick: () => void;
}) => {
  return <ColorWrapper color={color} onPress={onClick} />;
};

export default Color;

const ColorWrapper = styled(TouchableOpacity)<{color: KeyOfPalette}>`
  width: 30px;
  height: 30px;
  background-color: ${({color}) => theme.palette[color]};
  border-radius: 15px;
`;

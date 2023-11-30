import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from 'styled-components/native';

interface ColorProps {
  backgroundColor?: string;
  onPress: () => void;
}

interface ThemeColorsProps {
  changeTheme: (colorName: string) => void;
}

const ThemeColors = ({changeTheme}: ThemeColorsProps) => {
  const theme = useTheme();

  const handleColorChange = (color: string) => {
    changeTheme(color);
  };

  return (
    <ColorPalette>
      <Color
        backgroundColor={theme.palette.orange}
        onPress={() => handleColorChange('orange')}
      />
      <Color
        backgroundColor={theme.palette.green}
        onPress={() => handleColorChange('green')}
      />
      <Color
        backgroundColor={theme.palette.blue}
        onPress={() => handleColorChange('blue')}
      />
      <Color
        backgroundColor={theme.palette.purple}
        onPress={() => handleColorChange('purple')}
      />
      <Color
        backgroundColor={theme.palette.pink}
        onPress={() => handleColorChange('pink')}
      />
    </ColorPalette>
  );
};

export default ThemeColors;

const ColorPalette = styled.View`
  display: flex;
  flex-direction: row;
  gap: 28px;
  margin: 16px auto;
`;

const Color = styled(TouchableOpacity)<ColorProps>`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background-color: ${props => props.backgroundColor};
`;

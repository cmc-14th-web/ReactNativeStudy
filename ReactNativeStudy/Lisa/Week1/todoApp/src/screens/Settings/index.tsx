import Color from 'components/Color';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {theme} from 'styles';
import {colorList} from 'utils/colorList';

const Settings = () => {
  return (
    <>
      <TextWrapper>
        <StyledText>색상을 선택해주세요.</StyledText>
      </TextWrapper>
      <ColorWrapper>
        {colorList.map(color => (
          <Color color={color} />
        ))}
      </ColorWrapper>
    </>
  );
};

export default Settings;

const TextWrapper = styled(View)`
  padding: 16px 32px;
`;

const StyledText = styled(Text)`
  ${theme.typo.body};
  color: ${theme.palette.black};
`;

const ColorWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 30px;
  gap: 28px;
`;

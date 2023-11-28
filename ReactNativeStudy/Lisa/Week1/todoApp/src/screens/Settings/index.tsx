import {View, Text} from 'react-native';
import styled from 'styled-components';
import {theme} from 'styles';

import ColorListItem from 'components/atoms/Color/ColorListItem';

const Settings = () => {
  return (
    <>
      <TextWrapper>
        <StyledText>색상을 선택해주세요.</StyledText>
      </TextWrapper>
      <ColorWrapper>
        <ColorListItem />
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

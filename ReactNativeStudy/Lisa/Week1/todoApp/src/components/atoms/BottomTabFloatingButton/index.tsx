import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';

import AddIcon from 'assets/icons/AddIcon';
import {colorState} from 'libs/store/color';
import useNavigator from 'libs/hooks/useNavigator';
import {buttonState} from 'libs/store/button';

const BottomTabFloatingButton = () => {
  const {stackNavigation} = useNavigator();
  const colorData = useRecoilValue(colorState);
  const buttonStateData = useRecoilValue(buttonState);

  const handlePress = () => {
    stackNavigation.navigate('AddTodo');
  };

  return buttonStateData.isBottomTabFloatingButtonVisible ? (
    <StyledButtonWrapper onPress={handlePress}>
      <AddIcon fill={colorData.color} />
    </StyledButtonWrapper>
  ) : null;
};

export default BottomTabFloatingButton;

const StyledButtonWrapper = styled(TouchableOpacity)`
  position: absolute;
  left: 50%;
  margin-left: -25px;
  bottom: 6px;
`;

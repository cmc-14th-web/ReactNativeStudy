import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';
import {useNavigation} from '@react-navigation/native';

import AddIcon from 'assets/icons/AddIcon';
import {colorState} from 'libs/store/color';

const BottomTabFloatingButton = () => {
  const navigation = useNavigation();
  const colorData = useRecoilValue(colorState);

  const handlePress = () => {
    navigation.navigate('AddTodo');
  };

  return (
    <StyledButtonWrapper onPress={handlePress}>
      <AddIcon fill={colorData.color} />
    </StyledButtonWrapper>
  );
};

export default BottomTabFloatingButton;

const StyledButtonWrapper = styled(TouchableOpacity)`
  position: absolute;
  left: 50%;
  margin-left: -25px;
  bottom: 6px;
`;

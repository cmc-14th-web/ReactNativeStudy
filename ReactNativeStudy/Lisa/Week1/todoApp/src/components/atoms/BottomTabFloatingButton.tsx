import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import AddIcon from 'assets/icons/AddIcon';

const BottomTabFloatingButton = () => {
  const navigation = useNavigation();

  return (
    <StyledButtonWrapper
      onPress={() => {
        navigation.navigate('AddTodo');
      }}>
      <AddIcon />
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

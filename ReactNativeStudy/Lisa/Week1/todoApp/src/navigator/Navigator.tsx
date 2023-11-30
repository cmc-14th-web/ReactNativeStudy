import {NavigationContainer} from '@react-navigation/native';

import BottomTabFloatingButton from 'components/atoms/BottomTabFloatingButton';
import ModalContainer from 'components/layout/ModalContainer';
import StackNavigator from './StackNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      <BottomTabFloatingButton />
      <ModalContainer />
    </NavigationContainer>
  );
};

export default Navigator;

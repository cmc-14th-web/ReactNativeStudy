import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigation from './StackNavigation';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigation;

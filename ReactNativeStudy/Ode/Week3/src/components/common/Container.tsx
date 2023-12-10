import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native';
import Colors from '../../styles/colors';

type ContainerProps = {
  children: ReactNode;
};

export default function Container({children}: ContainerProps) {
  return (
    <SafeAreaView style={{backgroundColor: Colors.Black, flex: 1}}>
      {children}
    </SafeAreaView>
  );
}

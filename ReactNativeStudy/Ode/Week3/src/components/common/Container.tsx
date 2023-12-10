import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native';

type ContainerProps = {
  children: ReactNode;
};

export default function Container({children}: ContainerProps) {
  return <SafeAreaView>{children}</SafeAreaView>;
}

import React from 'react';
import {useStore} from '../../store/store';
import GradientText from './GradientText';

export default function TabBar({
  children,
  focused,
}: {
  children: string;
  focused: boolean;
}) {
  const {currentColor} = useStore();
  return (
    <GradientText
      gradientColors={[currentColor.start, currentColor.end]}
      mode={1}
      isHome={focused}>
      {children}
    </GradientText>
  );
}

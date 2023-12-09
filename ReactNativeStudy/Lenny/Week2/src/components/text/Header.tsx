import React from 'react';
import {useStore} from '../../store/store';
import GradientText from './GradientText';

export default function Title({children}: {children: string}) {
  const {currentColor} = useStore();
  return (
    <GradientText
      gradientColors={[currentColor.start, currentColor.end]}
      mode={0}
      isHome={null}>
      {children === '홈' ? 'LANY님의 사진첩' : '설정'}
    </GradientText>
  );
}

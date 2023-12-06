import React from 'react';
import PurpleAddSvg from '../assets/purple-add.svg';
import GreenAddSvg from '../assets/green-add.svg';
import RedAddSvg from '../assets/red-add.svg';
import {useStore} from '../store/store';

export default function AddSvg() {
  const {currentColor} = useStore();
  switch (currentColor.color) {
    case 'purple':
      return <PurpleAddSvg />;
    case 'green':
      return <GreenAddSvg />;
    case 'red':
      return <RedAddSvg />;
    default:
      return;
  }
}

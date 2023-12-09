import React from 'react';
import HomeSvg from '../assets/home.svg';
import SettingSvg from '../assets/setting.svg';
import {colors} from '../styles/colors';
import {useStore} from '../store/store';

export const HomeTabIcon = ({focused}: {focused: boolean}) => {
  const {currentColor} = useStore();
  return <HomeSvg color={focused ? currentColor.start : colors.lightGray} />;
};

export const SettingTabIcon = ({focused}: {focused: boolean}) => {
  const {currentColor} = useStore();
  return <SettingSvg color={focused ? currentColor.start : colors.lightGray} />;
};

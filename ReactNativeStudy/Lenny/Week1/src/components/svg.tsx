import React from 'react';
import Home from '../assets/icons/home.svg';
import Setting from '../assets/icons/setting.svg';
import colors from '../styles/color';

export const HomeSVG = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => <Home width={28} height={28} color={focused ? color : colors.darkGray} />;

export const SettingSVG = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <Setting width={28} height={28} color={focused ? color : colors.darkGray} />
);

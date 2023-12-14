import React from 'react';
import {SvgProps} from 'react-native-svg';
import * as Icons from '../../assets';

import {COLOR} from '../../constants/color';

type IconProps = SvgProps & {
  name: keyof typeof Icons;
  fill?: keyof typeof COLOR;
  size?: number;
};

function Icon({name, fill = 'RED', size = 20, ...props}: IconProps) {
  const Comp = Icons[name];

  return <Comp {...props} fill={COLOR[fill]} width={size} height={size} />;
}

export default Icon;

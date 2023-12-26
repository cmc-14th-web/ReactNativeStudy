import {Path, Svg, SvgProps} from 'react-native-svg';

import {svgIconPath} from '../constants/svgIconPath';
import {KeyOfPalette, theme} from '../styles/theme';

interface SvgIconsProps extends SvgProps {
  iconVariant: keyof typeof svgIconPath;
  width?: number;
  height?: number;
  fill?: KeyOfPalette;
}

const SvgIcons = ({
  iconVariant,
  width = 24,
  height = 24,
  fill = 'blue_600',
  ...props
}: SvgIconsProps) => {
  return (
    <Svg {...props} width={width} height={height} viewBox="0 0 24 24">
      <Path d={svgIconPath[iconVariant]} fill={theme.palette[fill]} />
    </Svg>
  );
};

export default SvgIcons;

import {palette} from '../src/lib/styles/color-palette';

export type ColorType = keyof typeof palette;

export interface IconProps {
  color: ColorType;
}

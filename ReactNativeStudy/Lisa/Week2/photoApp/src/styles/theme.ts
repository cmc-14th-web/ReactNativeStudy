import {palette} from './palette';

export type TypeOfTheme = {
  palette: TypeOfPalette;
};

export const theme: TypeOfTheme = {
  palette,
};

export type TypeOfPalette = typeof palette;
export type KeyOfPalette = keyof typeof palette;

export type KeyofTheme = keyof typeof theme;

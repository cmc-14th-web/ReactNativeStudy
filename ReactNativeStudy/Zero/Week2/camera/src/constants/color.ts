export const COLOR = {
  Purple: '#A45CFF',
  Pink: '#E33AFF',
  Black: '#000000',
  White: '#FFFFFF',
  Gray400: '#888888',
  Gray600: '#282828',
  Gray900: '#121212',
};

export const GRADIENT = {
  Gradient100: `linear-gradient(90deg, ${COLOR.Pink} 0%, ${COLOR.Purple} 100%)`,
};

export type ColorName = keyof typeof COLOR;
export type GradientName = keyof typeof GRADIENT;
export type ColorValue = (typeof COLOR)[ColorName];
export type GradientValue = (typeof GRADIENT)[GradientName];

export type Color = ColorValue | GradientValue;

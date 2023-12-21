const palette = {
  Blue100: '#E9EEFF',
  Blue200: '#BFC9FF',
  Blue600: '#5061FF',
  Black: '#000000',
  White: '#ffffff',
  Gray100: '#E4E4E4',
  Gray200: '#C3C3C3',
  Gray600: '#888888',
} as const;

export type KeyofPalette = keyof typeof palette;

export default palette;

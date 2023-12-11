const palette = {
  Red: '#EB3323',
  Black: '#000000',
  White: '#ffffff',
  Gray100: '#f5f5f5',
  Gray600: '#8b8b8b',
  Gray800: '#272727',
  Gray900: '#121212',
} as const;

export type KeyofPalette = keyof typeof palette;

export default palette;

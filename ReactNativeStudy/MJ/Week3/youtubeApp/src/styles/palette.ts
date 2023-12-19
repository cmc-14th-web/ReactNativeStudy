const palette = {
  Red: '#EB3323',
  Black: '#000000',
  White: '#FFFFFF',
  Gray100: '#F5F5F5',
  Gray600: '#8B8B8B',
  Gray800: '#272727',
  Gray900: '#121212',
} as const;

export type KeyofPalette = keyof typeof palette;

export default palette;

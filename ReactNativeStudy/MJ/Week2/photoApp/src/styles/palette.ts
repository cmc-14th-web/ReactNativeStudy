const palette = {
  Purple: '#A45CFF',
  Gray400: '#888888',
  Pink: '#E33AFF',
  Gray600: '#282828',
  Gradient100: 'linear-gradient(90deg, #E73AFF 0%, #A45CFF 100%)',
  Gray900: '#121212',
  Black: '#000000',
  White: '#FFFFFF',
} as const;

export type KeyofPalette = keyof typeof palette;

export default palette;

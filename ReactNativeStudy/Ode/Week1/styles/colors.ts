const Colors = {
  backgroundColor: "#F5F5F5",

  white: "#ffffff",
  gray: "#F5F5F5",
  darkGray: "#888888",
  black: "#000000",

  main: {
    orange: "#FF8F50",
    green: "#57BB73",
    blue: "#5061FF",
    purple: "#C750FF",
    pink: "#FF7474",
  },
};

export default Colors;

export type MainColorCodeKeys = keyof typeof Colors.main;

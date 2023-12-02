module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.native.js'],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': 'off',
  },
};

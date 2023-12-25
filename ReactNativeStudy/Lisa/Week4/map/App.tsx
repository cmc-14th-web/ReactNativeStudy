import {SafeAreaView, StyleSheet} from 'react-native';

import Navigation from './src/navigators/Navigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={appStyles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

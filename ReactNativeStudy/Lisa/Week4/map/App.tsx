import {SafeAreaView, StyleSheet} from 'react-native';
import {useEffect} from 'react';

import {checkLocationPermissions} from './src/utils/checkLocationPermissions';
import Navigation from './src/navigators/Navigation';

function App(): JSX.Element {
  useEffect(() => {
    checkLocationPermissions();
  }, []);

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

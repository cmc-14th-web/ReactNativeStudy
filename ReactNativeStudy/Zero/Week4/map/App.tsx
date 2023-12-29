import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigation/BottomNavigation';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
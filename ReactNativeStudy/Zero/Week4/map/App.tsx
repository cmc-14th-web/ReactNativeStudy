import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigation/BottomNavigation';
import { RecoilRoot } from 'recoil';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RecoilRoot>
        <NavigationContainer>
          <BottomNavigation />
        </NavigationContainer>
      </RecoilRoot>
    </SafeAreaView>
  );
}

export default App;
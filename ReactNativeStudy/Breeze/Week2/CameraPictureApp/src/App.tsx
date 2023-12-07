import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Navigation} from './navigation';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet/lib/typescript/contexts';

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000); //스플래시 활성화 시간
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Navigation />
    </GestureHandlerRootView>
  );
}

//const styles = StyleSheet.create({
//  sectionContainer: {
//    marginTop: 32,
//    paddingHorizontal: 24,
//  },
//});

export default App;

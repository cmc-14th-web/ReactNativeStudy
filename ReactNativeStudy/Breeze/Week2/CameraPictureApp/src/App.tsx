import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import Navigation from './navigation';

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000); //스플래시 활성화 시간
  });
  return <Navigation />;
}

//const styles = StyleSheet.create({
//  sectionContainer: {
//    marginTop: 32,
//    paddingHorizontal: 24,
//  },
//});

export default App;

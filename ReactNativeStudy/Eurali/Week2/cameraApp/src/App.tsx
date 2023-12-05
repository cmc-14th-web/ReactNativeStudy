import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Text} from 'react-native';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000); //스플래시 활성화 시간
  });
  return <Text>haha</Text>;
}

export default App;

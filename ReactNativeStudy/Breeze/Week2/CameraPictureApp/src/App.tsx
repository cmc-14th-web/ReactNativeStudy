import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Navigation} from './navigation';
import PermissionUtil from './util/PermissionUtil';
import {APP_PERMISSION_CODE} from './constants/PermissionCode';

function App() {
  useEffect(() => {
    setTimeout(async () => {
      SplashScreen.hide();
      await PermissionUtil.cmmReqPermis([
        ...APP_PERMISSION_CODE.camera,
        ...APP_PERMISSION_CODE.picture,
      ]);
    }, 1000);
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Navigation />
    </GestureHandlerRootView>
  );
}

export default App;

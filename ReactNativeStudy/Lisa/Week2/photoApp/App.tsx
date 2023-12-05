import Navigation from 'navigators/Navigation';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  checkCameraPermission,
  checkExternalStoragePermission,
} from 'utils/checkPermission';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });

  useEffect(() => {
    checkCameraPermission();
    checkExternalStoragePermission();
  }, []);

  return (
    <>
      <Navigation />
    </>
  );
}

export default App;

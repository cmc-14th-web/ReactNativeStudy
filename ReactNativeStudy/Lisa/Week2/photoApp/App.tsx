import Navigation from 'navigators/Navigation';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {checkCameraAndGalleryPermission} from 'utils/checkPermission';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });

  useEffect(() => {
    checkCameraAndGalleryPermission();
  }, []);

  return (
    <>
      <Navigation />
    </>
  );
}

export default App;

import Navigation from 'navigators/Navigation';
import {useEffect} from 'react';
import {
  checkCameraPermission,
  checkExternalStoragePermission,
} from 'utils/checkPermission';

function App(): JSX.Element {
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

import {PERMISSIONS, request, checkMultiple} from 'react-native-permissions';

export const requestPermissions = async (os: any) => {
  let cameraPermission, storagePermission;

  if (os === 'android') {
    ({
      [PERMISSIONS.ANDROID.CAMERA]: cameraPermission,
      [PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]: storagePermission,
    } = await checkMultiple([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ]));
  } else if (os === 'ios') {
    ({
      [PERMISSIONS.IOS.CAMERA]: cameraPermission,
      [PERMISSIONS.IOS.PHOTO_LIBRARY]: storagePermission,
    } = await checkMultiple([
      PERMISSIONS.IOS.CAMERA,
      PERMISSIONS.IOS.PHOTO_LIBRARY,
    ]));
  }
  if (cameraPermission !== 'granted') {
    await requestCameraPermission(os);
  }

  if (storagePermission !== 'granted') {
    await requestStoragePermission(os);
  }
};

const requestCameraPermission = async (os: any) => {
  try {
    if (os === 'android') {
      await request(PERMISSIONS.ANDROID.CAMERA);
    } else if (os === 'ios') {
      await request(PERMISSIONS.IOS.CAMERA);
    }
  } catch (error) {
    console.error('Error requesting camera permission:', error);
  }
};

const requestStoragePermission = async (os: any) => {
  try {
    if (os === 'android') {
      await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    } else if (os === 'ios') {
      await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    }
  } catch (error) {
    console.error('Error requesting gallery permission:', error);
  }
};

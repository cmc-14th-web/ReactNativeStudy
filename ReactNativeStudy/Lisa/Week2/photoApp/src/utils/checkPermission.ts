import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Alert} from 'react-native';

export const checkCameraPermission = async () => {
  try {
    const cameraPermissionStatus = await request(PERMISSIONS.ANDROID.CAMERA);

    if (cameraPermissionStatus === RESULTS.GRANTED) {
      // 권한이 허용된 경우에 실행되는 로직
    } else {
      // 권한이 거부된 경우에 실행되는 로직
      Alert.alert('카메라 권한이 거부되었습니다.');
    }
  } catch (error) {
    console.log(error);
  }
};

export const checkExternalStoragePermission = async () => {
  try {
    const readExternalStoragePermissionStatus = await request(
      PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
    );

    if (readExternalStoragePermissionStatus === RESULTS.GRANTED) {
      // 권한이 허용된 경우에 실행되는 로직
    } else {
      // 권한이 거부된 경우에 실행되는 로직
      Alert.alert('갤러리 읽기 권한이 거부되었습니다.');
    }
  } catch (error) {
    console.log(error);
  }
};

import {requestMultiple, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Alert} from 'react-native';

export const checkCameraAndGalleryPermission = async () => {
  try {
    const PermissionStatus = await requestMultiple([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
    ]);

    if (
      PermissionStatus[PERMISSIONS.ANDROID.CAMERA] === RESULTS.GRANTED &&
      PermissionStatus[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES]
    ) {
    } else if (
      PermissionStatus[PERMISSIONS.ANDROID.CAMERA] !== RESULTS.GRANTED
    ) {
      Alert.alert('카메라 권한이 거부되었습니다.');
    } else if (
      PermissionStatus[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] !==
      RESULTS.GRANTED
    ) {
      Alert.alert('갤러리 권한이 거부되었습니다.');
    }
  } catch (error) {
    console.log(error);
  }
};

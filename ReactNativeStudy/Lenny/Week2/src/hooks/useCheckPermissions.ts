import {useEffect} from 'react';
import {Alert, Platform} from 'react-native';
import {
  PERMISSIONS,
  checkMultiple,
  request,
  requestMultiple,
} from 'react-native-permissions';

const useCheckPermissions = () => {
  // ios와 andriod의 사진 가져오는 이름이 다르기 때문에 나누어 주었다.
  const permissions =
    Platform.OS === 'ios'
      ? {
          cameraPermission: PERMISSIONS.IOS.CAMERA,
          photoLibraryPermission: PERMISSIONS.IOS.PHOTO_LIBRARY,
        }
      : {
          cameraPermission: PERMISSIONS.ANDROID.CAMERA,
          photoLibraryPermission: PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
        };
  useEffect(() => {
    checkMultiple([
      permissions.cameraPermission,
      permissions.photoLibraryPermission,
    ])
      .then(result => {
        const cameraPermissionStatus = result[permissions.cameraPermission];
        const photoLibraryPermissionStatus =
          result[permissions.photoLibraryPermission];

        // PERMISSION에서 2개 모두 denied라면 requestMultiple을 요청하고
        // 둘 중 하나만 denied라면 해당 권한에 대해 request 요청을 보낸다.
        // 만약 둘 다 granted라면 아무런 조치를 하지 않고 넘어간다.
        if (
          cameraPermissionStatus === 'denied' &&
          photoLibraryPermissionStatus === 'denied'
        ) {
          requestMultiple([
            permissions.cameraPermission,
            permissions.photoLibraryPermission,
          ])
            .then(res => console.log(res))
            .catch(err => console.log(err));
        } else if (cameraPermissionStatus === 'denied') {
          request(permissions.cameraPermission)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        } else if (photoLibraryPermissionStatus === 'denied') {
          request(permissions.photoLibraryPermission)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }

        // 설정에서 권한을 해제해두었다면 Alert를 띄워준다.
        if (cameraPermissionStatus === 'blocked') {
          Alert.alert('카메라 권한을 허용해주세요.');
        }
        if (photoLibraryPermissionStatus === 'blocked') {
          Alert.alert('갤러리 권한을 허용해주세요.');
        }
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }, [permissions.cameraPermission, permissions.photoLibraryPermission]);
};

export default useCheckPermissions;

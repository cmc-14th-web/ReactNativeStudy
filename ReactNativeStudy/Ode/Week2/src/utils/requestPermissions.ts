import {Alert, Linking, Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import {IOSPermissionMap} from 'react-native-permissions/dist/typescript/permissions.ios';

const permissions: Array<keyof IOSPermissionMap> = ['CAMERA', 'PHOTO_LIBRARY'];

export const requestPermissions = async (): Promise<void> => {
  if (Platform.OS !== 'ios') {
    Alert.alert('Only iOS available');
    return;
  }

  const permissionRequests = permissions.map(permission =>
    request(PERMISSIONS.IOS[permission]),
  );

  Promise.all(permissionRequests)
    .then(response => {
      if (response.includes('denied')) {
        Alert.alert(
          '권한 필요',
          '카메라 및 갤러리 접근 권한이 필요합니다. 설정으로 이동하시겠습니까?',
          [
            {text: '취소', style: 'cancel'},
            {text: '설정으로 이동', onPress: () => Linking.openSettings()},
          ],
        );
      }
    })
    .catch(error => console.error(error));
};

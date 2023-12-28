import {Alert, Platform} from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  check,
  openSettings,
  requestMultiple,
} from 'react-native-permissions';
import {PlatformType} from '../types';

export async function requestLocationPermissions() {
  const permissionsToRequest = [
    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  ];

  const permissionStatus = await requestMultiple(permissionsToRequest);

  if (Platform.OS === 'android') {
    const fineLocationStatus =
      permissionStatus[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
    if (fineLocationStatus !== RESULTS.GRANTED) {
      Alert.alert(
        'android 위치 정보 권한이 거부되었습니다.',
        '앱을 사용하려면 위치 정보 권한이 필요합니다.',
        [
          {
            text: '설정으로 이동',
            onPress: () => openSettings(),
          },
        ],
      );
    }
  }

  if (Platform.OS === 'ios') {
    const whenInUseStatus =
      permissionStatus[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE];
    if (whenInUseStatus !== RESULTS.GRANTED) {
      Alert.alert(
        'iOS 위치 정보 권한이 거부되었습니다.',
        '앱을 사용하려면 위치 정보 권한이 필요합니다.',
        [
          {
            text: '설정으로 이동',
            onPress: () => openSettings(),
          },
        ],
      );
    }
  }
}

export async function getLocationPermission(platform: PlatformType) {
  if (platform === 'ios') {
    const result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    return result === RESULTS.GRANTED;
  }
  if (platform === 'android') {
    const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    return result === RESULTS.GRANTED;
  }
}

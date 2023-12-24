import {Alert, Platform} from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  check,
  requestMultiple,
} from 'react-native-permissions';
import {PlatformType} from '../types';

export async function requestLocationPermissions() {
  const PermissionStatus = await requestMultiple([
    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  ]);

  if (Platform.OS === 'android') {
    if (
      PermissionStatus[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] !==
      RESULTS.GRANTED
    ) {
      Alert.alert('android 위치 정보 권한이 거부되었습니다.');
    }
  }
  if (Platform.OS === 'ios') {
    if (
      PermissionStatus[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] !== RESULTS.GRANTED
    ) {
      Alert.alert('ios 위치 정보 권한이 거부되었습니다.');
    }
  }
}

export async function isAllowLocation(platform: PlatformType) {
  if (platform === 'ios') {
    const result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    return result === RESULTS.GRANTED;
  }
  if (platform === 'android') {
    const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    return result === RESULTS.GRANTED;
  }
}

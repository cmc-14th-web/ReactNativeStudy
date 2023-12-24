import {Alert, Platform} from 'react-native';
import {PERMISSIONS, RESULTS, requestMultiple} from 'react-native-permissions';

export async function requestLocationPermissions() {
  const PermissionStatus = await requestMultiple([
    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  ]);
  console.log(PermissionStatus);
  if (
    PermissionStatus[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] !==
      RESULTS.GRANTED &&
    Platform.OS === 'android'
  ) {
    Alert.alert('위치 정보 권한이 거부되었습니다.');
  }
  if (
    PermissionStatus[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] !==
      RESULTS.GRANTED &&
    Platform.OS === 'ios'
  ) {
    Alert.alert('위치 정보 권한이 거부되었습니다.');
  }
}

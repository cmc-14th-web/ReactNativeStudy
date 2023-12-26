import {
  PermissionStatus,
  RESULTS,
  checkMultiple,
  request,
  requestMultiple,
} from 'react-native-permissions';
import {Alert} from 'react-native';

import {permissions} from '../constants/permission';
import {LocationPermission} from '../models/permission';

export const checkLocationPermissions = async () => {
  try {
    const result = await checkMultiple([
      permissions.coarseLocationPermission,
      permissions.fineLocationPermission,
    ]);

    handlePermissionResult(result);
  } catch (error) {
    console.log(error);
  }
};

const handleSinglePermissionRequest = async (
  permissionStatus: PermissionStatus,
  permissionType: LocationPermission,
) => {
  if (permissionStatus === RESULTS.DENIED) {
    try {
      const result = await request(permissionType);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
};

const handlePermissionResult = async (
  result: Record<LocationPermission, PermissionStatus>,
) => {
  const coarseLocationPermissionStatus =
    result[permissions.coarseLocationPermission];
  const fineLocationPermissionStatus =
    result[permissions.fineLocationPermission];

  if (
    coarseLocationPermissionStatus === RESULTS.DENIED &&
    fineLocationPermissionStatus === RESULTS.DENIED
  ) {
    await requestMultiple([
      permissions.coarseLocationPermission,
      permissions.fineLocationPermission,
    ]);
  } else {
    await handleSinglePermissionRequest(
      coarseLocationPermissionStatus,
      permissions.coarseLocationPermission,
    );

    await handleSinglePermissionRequest(
      fineLocationPermissionStatus,
      permissions.fineLocationPermission,
    );
  }

  if (
    coarseLocationPermissionStatus === RESULTS.BLOCKED ||
    fineLocationPermissionStatus === RESULTS.BLOCKED
  ) {
    Alert.alert('위치 권한을 허용해주세요.');
  }
};

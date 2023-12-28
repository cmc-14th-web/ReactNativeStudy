import {
  PermissionStatus,
  RESULTS,
  checkMultiple,
  request,
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
  permissionType: LocationPermission,
) => {
  try {
    const result = await request(permissionType);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const checkPermissionStatus = async (
  result: Record<LocationPermission, PermissionStatus>,
  permissionType: LocationPermission,
) => {
  const permissionStatus = result[permissionType];

  if (permissionStatus === RESULTS.DENIED) {
    await handleSinglePermissionRequest(permissionType);
  }
};

const handlePermissionResult = async (
  result: Record<LocationPermission, PermissionStatus>,
) => {
  await checkPermissionStatus(result, permissions.coarseLocationPermission);
  await checkPermissionStatus(result, permissions.fineLocationPermission);

  const isBlocked =
    result[permissions.coarseLocationPermission] === RESULTS.BLOCKED ||
    result[permissions.fineLocationPermission] === RESULTS.BLOCKED;

  if (isBlocked) {
    Alert.alert('위치 권한을 허용해주세요.');
  }
};

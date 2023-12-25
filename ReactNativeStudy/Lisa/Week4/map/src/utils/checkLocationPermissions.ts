import {
  checkMultiple,
  request,
  requestMultiple,
} from 'react-native-permissions';
import {Alert} from 'react-native';

import {permissions} from '../constants/permission';

export const checkLocationPermissions = () => {
  checkMultiple([
    permissions.coarseLocationPermission,
    permissions.fineLocationPermission,
  ])
    .then(result => {
      const coarseLocationPermissionStatus =
        result[permissions.coarseLocationPermission];
      const fineLocationPermissionStatus =
        result[permissions.fineLocationPermission];

      if (
        coarseLocationPermissionStatus === 'denied' &&
        fineLocationPermissionStatus === 'denied'
      ) {
        requestMultiple([
          permissions.coarseLocationPermission,
          permissions.fineLocationPermission,
        ]);
      } else if (coarseLocationPermissionStatus === 'denied') {
        request(permissions.coarseLocationPermission)
          .then(result => console.log(result))
          .catch(error => console.log(error));
      } else if (fineLocationPermissionStatus === 'denied') {
        request(permissions.fineLocationPermission)
          .then(result => console.log(result))
          .catch(error => console.log(error));
      }

      if (
        coarseLocationPermissionStatus === 'blocked' ||
        fineLocationPermissionStatus === 'blocked'
      ) {
        Alert.alert('위치 권한을 허용해주세요.');
      }
    })
    .catch(error => console.log(error));
};

import {permissions as availablePermissions} from '../constants/permission';

export type LocationPermission =
  (typeof availablePermissions)[keyof typeof availablePermissions];

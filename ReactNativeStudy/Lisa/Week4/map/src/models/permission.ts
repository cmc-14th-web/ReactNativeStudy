import {permissions} from '../constants/permission';

export type LocationPermission = (typeof permissions)[keyof typeof permissions];

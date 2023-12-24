import Geolocation from 'react-native-geolocation-service';
import {isAllowLocation} from './permissions';
import {PlatformType} from '../types';
export async function getLocation(platform: PlatformType) {
  console.log(platform);
  if (await isAllowLocation(platform)) {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }
}

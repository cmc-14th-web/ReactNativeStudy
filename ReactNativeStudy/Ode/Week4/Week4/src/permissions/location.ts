import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';

export default async function getCurrentLocation(): Promise<GeoPosition> {
  const hasPermission = await requestLocationPermission();
  if (!hasPermission) {
    throw new Error('has no permission');
  }

  if (hasPermission) {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          resolve(position);
        },
        error => {
          reject(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });
  } else {
    throw new Error('Location permission not granted');
  }
}

const requestLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    const auth = await Geolocation.requestAuthorization('whenInUse');
    return auth === 'granted';
  } else {
    const auth = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'This app requires access to your location.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return auth === PermissionsAndroid.RESULTS.GRANTED;
  }
};

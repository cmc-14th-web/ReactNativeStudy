import {useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {useLocationStore} from '../store/useLocation';
import {getLocationPermission} from '../utils/permissions';
import {Platform} from 'react-native';
import {PlatformType} from '../types';

const useGeolocation = () => {
  const {setLocation} = useLocationStore(state => state);

  const fetchDataAndSetInterval = (isAllowPermission: boolean) => {
    try {
      const locationInterval = setInterval(() => {
        if (isAllowPermission) {
          Geolocation.getCurrentPosition(
            position => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              setLocation({latitude, longitude});
            },
            error => {
              console.log('error', error.code, error.message);
            },
            {
              enableHighAccuracy: true,
              timeout: 15000,
              maximumAge: 10000,
            },
          );
        }
      }, 2000);

      return locationInterval;
    } catch (error) {
      console.error('권한이 부족해요.', error);
    }
  };

  useEffect(() => {
    const initializeLocation = async () => {
      const OS = Platform.OS as PlatformType;
      const locationPermission = await getLocationPermission(OS);
      const locationInterval = fetchDataAndSetInterval(!!locationPermission);
      return () => {
        clearInterval(locationInterval);
      };
    };

    initializeLocation();
  }, []);

  return;
};

export default useGeolocation;

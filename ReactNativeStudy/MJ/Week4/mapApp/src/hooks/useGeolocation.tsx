import {useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {useLocationStore} from '../store/useLocation';

const useGeolocation = () => {
  const {setLocation} = useLocationStore(state => state);

  useEffect(() => {
    const locationInterval = setInterval(() => {
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
    }, 2000);
    return () => {
      clearInterval(locationInterval);
    };
  }, []);

  return;
};

export default useGeolocation;

import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {locationState} from '../states/location';
import getCurrentLocation from '../../../permissions/location';
import {Location} from '../../../types/location';

export default function useLocationState() {
  const [location, setLocation] = useRecoilState<Location>(locationState);

  useEffect(() => {
    async function initialiseLocation() {
      const {
        coords: {latitude: lat, longitude: lng},
      } = await getCurrentLocation();

      const initialData: Location = {lat, lng, initialCenter: {lat, lng}};
      setLocation(initialData);
      console.log('current loc', initialData);
    }

    initialiseLocation();
  }, [setLocation]);

  return {
    location,
    setLocation,
  };
}

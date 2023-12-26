import {locationState} from './location';
import {MapData} from '../../screens/HomeScreen';
import {useRecoilState} from 'recoil';
import getCurrentLocation from '../../permissions/location';
import {useEffect} from 'react';

export default function useLocationState() {
  const [location, setLocation] = useRecoilState<MapData>(locationState);

  useEffect(() => {
    async function initialiseLocation() {
      const {
        coords: {latitude: lat, longitude: lng},
      } = await getCurrentLocation();

      const initialData: MapData = {lat, lng, initialCenter: {lat, lng}};
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

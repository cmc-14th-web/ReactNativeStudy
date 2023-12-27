import {atom} from 'recoil';
import {MapData} from '../../../screens/HomeScreen';

const LocationState = 'locationState';
export const locationState = atom<MapData>({
  key: LocationState,
  default: {lat: 31, lng: 123, initialCenter: {lat: 31, lng: 123}},
});

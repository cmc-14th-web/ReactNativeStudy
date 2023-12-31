import {atom} from 'recoil';
import {Location} from '../../../types/location';

const LocationState = 'locationState';
export const locationState = atom<Location>({
  key: LocationState,
  default: {lat: 31, lng: 123, initialCenter: {lat: 31, lng: 123}},
});

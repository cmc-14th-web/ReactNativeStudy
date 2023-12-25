import {create} from 'zustand';

type LocationStoreType = {
  latitude: number;
  longitude: number;
};

interface LocationState {
  location: LocationStoreType;
  setLocation: ({latitude, longitude}: LocationStoreType) => void;
}

export const useLocationStore = create<LocationState>(set => ({
  location: {
    latitude: 0,
    longitude: 0,
  },
  setLocation: ({latitude, longitude}: LocationStoreType) =>
    set(state => ({
      location: {latitude, longitude},
    })),
}));

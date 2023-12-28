import {create} from 'zustand';

type LocationStoreType = {
  latitude: number;
  longitude: number;
  type?: 'init' | 'post';
};

interface LocationState {
  location: LocationStoreType;
  setLocation: ({latitude, longitude, type}: LocationStoreType) => void;
}

export const useLocationStore = create<LocationState>(set => ({
  location: {
    latitude: 0,
    longitude: 0,
    type: 'init',
  },
  setLocation: ({latitude, longitude, type = 'post'}: LocationStoreType) =>
    set(prev => {
      // 첫 로딩이후에 type을 Post로 변경
      if (prev.location.latitude === 0 && prev.location.longitude === 0) {
        return {location: {latitude, longitude, type: 'init'}};
      }
      return {location: {latitude, longitude, type}};
    }),
}));

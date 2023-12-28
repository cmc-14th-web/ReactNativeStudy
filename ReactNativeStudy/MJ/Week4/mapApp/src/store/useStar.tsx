import {create} from 'zustand';

export type Star = {
  latitude: string;
  longitude: string;
  roadAddress: string;
};

type StarState = {
  stars: Star[];
  addStar: (star: Star) => void;
  removeStar: (star: Star) => void;
};

const useStar = create<StarState>(set => ({
  stars: [],
  addStar: star => set(state => ({stars: [...state.stars, star]})),
  removeStar: star =>
    set(state => ({
      stars: state.stars.filter(
        s => s.latitude !== star.latitude && s.longitude !== star.longitude,
      ),
    })),
}));

export default useStar;

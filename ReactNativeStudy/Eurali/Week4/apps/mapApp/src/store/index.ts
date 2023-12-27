import {create} from 'zustand';

export type PositionType = {
  latitude: Number;
  longitude: Number;
};

export type FavoriteType = {
  position: PositionType;
  address: String;
};

export type StoreType = {
  curState: String;
  setCurState: (s: String) => void;
  curPos: FavoriteType;
  setCurPos: (p: FavoriteType) => void;
  favorites: FavoriteType[];
  setFavorites: (f: FavoriteType) => void;
  removeFavorites: (f: FavoriteType) => void;
};

const favoriteStore = create<StoreType>(set => ({
  curState: 'NORMAL',
  setCurState: (s: String) => set({curState: s}),

  curPos: {
    position: {
      latitude: 0,
      longitude: 0,
    },
    address: '',
  },
  setCurPos: (p: FavoriteType) => set({curPos: p}),

  favorites: [],
  setFavorites: (f: FavoriteType) =>
    set(state => ({favorites: [...state.favorites, f]})),
  removeFavorites: (f: FavoriteType) =>
    set(state => ({
      favorites: state.favorites.filter(
        favorite => favorite.address !== f.address,
      ),
    })),
}));

export default favoriteStore;

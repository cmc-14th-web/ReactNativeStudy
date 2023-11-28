import {create} from 'zustand';
import colors from '../styles/color';

interface StoreState {
  color: string;
}

interface StoreAction {
  setColor: (color: string) => void;
}

export const useStore = create<StoreState & StoreAction>(set => ({
  color: colors.orange,
  setColor: (state: string) => set({color: state}),
}));

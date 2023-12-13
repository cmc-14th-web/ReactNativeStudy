import {create} from 'zustand';
import {SelectedVideo} from '../type/selectedVideo';

export const useSelectedVideoStore = create<SelectedVideo>(set => ({
  selectedVideo: null,
  setSelectedVideo: video => set({selectedVideo: video}),
}));

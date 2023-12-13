import {create} from 'zustand';

export const useSelectedVideoStore = create(set => ({
  selectedVideo: null,
  setSelectedVideo: video => set({selectedVideo: video}),
}));

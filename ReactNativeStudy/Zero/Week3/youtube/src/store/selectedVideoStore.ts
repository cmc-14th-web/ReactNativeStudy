import {create} from 'zustand';
import {SelectedVideo} from '../type/selectedVideo';
import {VideoInfo} from '../type/videoInfo';

export const useSelectedVideoStore = create<SelectedVideo>(set => ({
  selectedVideo: {} as VideoInfo,
  setSelectedVideo: selectedVideo => set({selectedVideo}),
}));

import {create} from 'zustand';
import {SelectedVideo} from '../type/selectedVideo';
import {FormattedVideoInfo} from '../type/videoInfo';

export const useSelectedVideoStore = create<SelectedVideo>(set => ({
  selectedVideo: {} as FormattedVideoInfo,
  setSelectedVideo: selectedVideo => set({selectedVideo}),
}));

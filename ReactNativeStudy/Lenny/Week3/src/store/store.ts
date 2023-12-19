import {create} from 'zustand';
import {VideoDetailType} from '../types/videos';

interface StoreState {
  searchResults: any;
  searchContent: string;
  videoDetail: VideoDetailType;
}

interface StoreAction {
  setSearchResults: (searchResults: any) => void;
  setSearchContent: (searchContent: string) => void;
  setVideoDetail: (searchContent: VideoDetailType) => void;
}

export const useStore = create<StoreState & StoreAction>(set => ({
  searchResults: [],
  searchContent: '',
  videoDetail: {
    videoId: '',
    viewCount: '',
    channelTitle: '',
    title: '',
    publishedAt: '',
  },
  setSearchResults: (state: any) => set({searchResults: [...state]}),
  setSearchContent: (state: string) => set({searchContent: state}),
  setVideoDetail: (state: VideoDetailType) => set({videoDetail: state}),
}));

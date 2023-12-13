import {VideoInfo} from './videoInfo';

export type SelectedVideo = {
  selectedVideo: null | VideoInfo;
  setSelectedVideo: (video: VideoInfo) => void;
};

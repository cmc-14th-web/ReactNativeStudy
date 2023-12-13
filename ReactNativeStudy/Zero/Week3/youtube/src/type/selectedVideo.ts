import {VideoInfo} from './videoInfo';

export type SelectedVideo = {
  selectedVideo: VideoInfo;
  setSelectedVideo: (video: VideoInfo) => void;
};

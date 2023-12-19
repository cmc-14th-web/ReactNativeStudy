import {FormattedVideoInfo} from './videoInfo';

export type SelectedVideo = {
  selectedVideo: FormattedVideoInfo;
  setSelectedVideo: (video: FormattedVideoInfo) => void;
};

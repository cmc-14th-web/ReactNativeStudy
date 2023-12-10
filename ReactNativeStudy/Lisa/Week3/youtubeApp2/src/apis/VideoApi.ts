import Config from 'react-native-config';

import {axiosInstance} from './axiosInstance';
import {VideoType} from 'types/video';

export const VideoApi = {
  GET_POPULAR_VIDEOS: async (): Promise<VideoType[]> => {
    const response = await axiosInstance.get(
      `/videos?part=snippet&chart=mostPopular&maxResults=25&key=${Config.API_KEY}`,
    );
    return response.data.items;
  },
};
